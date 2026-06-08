export type RobotStatus = "IDLE" | "RUNNING" | "ERROR" | "STOPPED";
export type RobotTelemetry = {
    robotId: string;
    status: RobotStatus;
    battery: number;
    temperature: number;
    jointAngles: number[];
    timestamp: string;
};
