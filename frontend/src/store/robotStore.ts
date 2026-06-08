import { create } from 'zustand';
import type { RobotStatus, RobotTelemetry } from '@/types/robot';

function createLog(message: string) {
    const time = new Date().toLocaleTimeString('en-GB', {
        hour12: false,
    });

    return `[${time}] ${message}`;
}

type RobotStore = {
    telemetry: RobotTelemetry;
    logs: string[];
    setTelemetry: (telemetry: RobotTelemetry) => void;
    setStatus: (status: RobotStatus) => void;
    moveJoint: (jointIndex: number, delta: number) => void;
    addLog: (message: string) => void;
};

const initialTelemetry: RobotTelemetry = {
    robotId: 'MAIRA-SIM-01',
    status: 'IDLE',
    battery: 87,
    temperature: 42,
    jointAngles: [10, 20, 30, 40, 50, 60],
    timestamp: 'Not connected',
};

const initialLogs = [
    '[system] Dashboard initialized',
    '[system] Waiting for telemetry stream',
];

export const useRobotStore = create<RobotStore>((set) => ({
    telemetry: initialTelemetry,
    logs: initialLogs,

    setTelemetry: (telemetry) =>
        set(() => ({
            telemetry,
        })),

    setStatus: (status) =>
        set((state) => ({
            telemetry: {
                ...state.telemetry,
                status,
            },
            logs: [createLog(`Status changed locally to ${status}`), ...state.logs].slice(
                0,
                8
            ),
        })),

    moveJoint: (jointIndex, delta) =>
        set((state) => {
            const updatedJointAngles = state.telemetry.jointAngles.map((angle, index) =>
                index === jointIndex ? angle + delta : angle
            );

            return {
                telemetry: {
                    ...state.telemetry,
                    jointAngles: updatedJointAngles,
                },
                logs: [
                    createLog(`Joint ${jointIndex + 1} moved locally by ${delta}°`),
                    ...state.logs,
                ].slice(0, 8),
            };
        }),

    addLog: (message) =>
        set((state) => ({
            logs: [createLog(message), ...state.logs].slice(0, 8),
        })),
}));