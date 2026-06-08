import { OnModuleDestroy } from '@nestjs/common';
import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RobotSimulatorService } from './robot-simulator.service';

@WebSocketGateway({
    cors: {
        origin: 'http://localhost:3000',
    },
})
export class RobotGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, OnModuleDestroy {
    @WebSocketServer()
    server!: Server;

    private intervalId: ReturnType<typeof setInterval> | null = null;

    constructor(private readonly robotSimulatorService: RobotSimulatorService) { }

    afterInit() {
        this.intervalId = setInterval(() => {
            const telemetry = this.robotSimulatorService.generateTelemetry();
            this.server.emit('robot:telemetry', telemetry);
        }, 1000);
    }

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);

        const currentTelemetry = this.robotSimulatorService.getCurrentTelemetry();

        client.emit('robot:telemetry', currentTelemetry);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    onModuleDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}