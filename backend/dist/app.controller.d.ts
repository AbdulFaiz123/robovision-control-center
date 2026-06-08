import { RobotSimulatorService } from './robot/robot-simulator.service';
export declare class AppController {
    private readonly robotSimulatorService;
    constructor(robotSimulatorService: RobotSimulatorService);
    getHome(): {
        message: string;
    };
    getHealth(): {
        status: string;
        service: string;
        timestamp: string;
    };
    getRobotStatus(): import("./robot/robot.types").RobotTelemetry;
}
