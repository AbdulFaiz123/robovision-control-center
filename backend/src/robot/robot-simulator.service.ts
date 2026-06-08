import { Injectable } from '@nestjs/common';
import { RobotTelemetry } from './robot.types';

@Injectable()
export class RobotSimulatorService {
    private tick = 0;
    private telemetry: RobotTelemetry = {
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
}