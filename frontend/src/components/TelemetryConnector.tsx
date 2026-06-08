'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useRobotStore } from '@/store/robotStore';
import type { RobotTelemetry } from '@/types/robot';

export function TelemetryConnector() {
    useEffect(() => {
        const socket = io('http://localhost:3001', {
            transports: ['websocket'],
            reconnectionAttempts: 5,
            reconnectionDelay: 2000,
        });

        socket.on('connect', () => {
            console.log('[socket] connected:', socket.id);
            useRobotStore.getState().addLog('Connected to robot telemetry stream');
        });

        socket.on('disconnect', () => {
            console.log('[socket] disconnected');
            useRobotStore.getState().addLog('Disconnected from robot telemetry stream');
        });

        socket.on('connect_error', (error) => {
            console.log('[socket] connection error:', error.message);
            useRobotStore.getState().addLog('Failed to connect to telemetry stream');
        });

        socket.on('robot:telemetry', (telemetry: RobotTelemetry) => {
            console.log('[socket] telemetry received:', telemetry);
            useRobotStore.getState().setTelemetry(telemetry);
        });

        return () => {
            console.log('[socket] cleanup');
            socket.removeAllListeners();
            socket.disconnect();
        };
    }, []);

    return null;
}