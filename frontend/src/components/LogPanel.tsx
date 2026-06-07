'use client';
import { useRobotStore } from '../store/robotStore';

export function LogPanel() {
    const logs = useRobotStore((state) => state.logs);

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-4">System Logs</h2>

            <div className="rounded-lg bg-black p-4 font-mono text-sm text-green-400 min-h-[140px]">
                {logs.map((log, index) => (
                    <p key={`${log}-${index}`}>{log}</p>
                ))}
            </div>
        </div>
    );
}