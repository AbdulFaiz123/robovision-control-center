"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const robot_simulator_service_1 = require("./robot-simulator.service");
let RobotGateway = class RobotGateway {
    robotSimulatorService;
    server;
    intervalId = null;
    constructor(robotSimulatorService) {
        this.robotSimulatorService = robotSimulatorService;
    }
    afterInit() {
        this.intervalId = setInterval(() => {
            const telemetry = this.robotSimulatorService.generateTelemetry();
            this.server.emit('robot:telemetry', telemetry);
        }, 1000);
    }
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
        const currentTelemetry = this.robotSimulatorService.getCurrentTelemetry();
        client.emit('robot:telemetry', currentTelemetry);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    onModuleDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
};
exports.RobotGateway = RobotGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], RobotGateway.prototype, "server", void 0);
exports.RobotGateway = RobotGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: 'http://localhost:3000',
        },
    }),
    __metadata("design:paramtypes", [robot_simulator_service_1.RobotSimulatorService])
], RobotGateway);
//# sourceMappingURL=robot.gateway.js.map