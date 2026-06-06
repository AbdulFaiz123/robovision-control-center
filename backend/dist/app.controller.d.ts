export declare class AppController {
    getHome(): {
        message: string;
    };
    getHealth(): {
        status: string;
        service: string;
        timestamp: string;
    };
    getRobotStatus(): {
        robotId: string;
        status: string;
        battery: number;
        temperature: number;
        jointAngles: number[];
    };
}
