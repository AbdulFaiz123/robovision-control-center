import { OnModuleDestroy } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RobotSimulatorService } from './robot-simulator.service';
export declare class RobotGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, OnModuleDestroy {
    private readonly robotSimulatorService;
    server: Server;
    private intervalId;
    constructor(robotSimulatorService: RobotSimulatorService);
    afterInit(): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    onModuleDestroy(): void;
}
