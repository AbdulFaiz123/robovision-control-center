export type RobotStatus = "IDLE" | "RUNNING" | "ERROR" | "STOPPED";

export type RobotTelemetry = {
    robotId: string;
    status: RobotStatus;
    battery: number; // percentage
    temperature: number; // in Celsius
    jointAngles: number[]; // array of joint angles
    timestamp: string; // ISO timestamp
};