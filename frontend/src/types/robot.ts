export type RobotStatus = 'IDLE' | 'STOPPED' | 'ERROR' | 'RUNNING';

export interface RobotTelemetry {
    robotId: string;
    status: RobotStatus;
    battery: number; // percentage
    temperature: number; // in Celsius
    jointAngles: number[]; // in degrees
    timestamp: string; // Unix timestamp
}