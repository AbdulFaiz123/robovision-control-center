"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotSimulatorService = void 0;
const common_1 = require("@nestjs/common");
let RobotSimulatorService = class RobotSimulatorService {
    tick = 0;
    telemetry = {
        robotId: 'MAIRA-SIM-01',
        status: 'IDLE',
        battery: 100,
        temperature: 25,
        jointAngles: [0, 0, 0, 0, 0, 0],
        timestamp: new Date().toISOString(),
    };
    getCurrentTelemetry() {
        return this.telemetry;
    }
    generateTelemetry() {
        this.tick++;
        const nextBattery = Math.max(0, this.telemetry.battery - 0.1);
        const nextTemperature = this.telemetry.temperature + (Math.random() * 0.5 - 0.25);
        const nextJointAngles = this.telemetry.jointAngles.map((angle, index) => {
            return Math.round(35 * Math.sin(this.tick / 5 + index));
        });
        this.telemetry = {
            robotId: 'MAIRA-SIM-01',
            status: 'RUNNING',
            battery: Number(nextBattery.toFixed(1)),
            temperature: Number(nextTemperature.toFixed(2)),
            jointAngles: nextJointAngles,
            timestamp: new Date().toISOString(),
        };
        return this.telemetry;
    }
};
exports.RobotSimulatorService = RobotSimulatorService;
exports.RobotSimulatorService = RobotSimulatorService = __decorate([
    (0, common_1.Injectable)()
], RobotSimulatorService);
//# sourceMappingURL=robot-simulator.service.js.map