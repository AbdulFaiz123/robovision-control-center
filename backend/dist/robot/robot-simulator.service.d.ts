import { RobotTelemetry } from './robot.types';
export declare class RobotSimulatorService {
    private tick;
    private telemetry;
    getCurrentTelemetry(): RobotTelemetry;
    generateTelemetry(): RobotTelemetry;
}
