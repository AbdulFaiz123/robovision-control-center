'use client';
import { useRobotStore } from '../store/robotStore';

export function ControlPanel() {
    const setStatus = useRobotStore((state) => state.setStatus);
    const moveJoint = useRobotStore((state) => state.moveJoint);
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-4">Control Panel</h2>

            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => setStatus('RUNNING')}
                    className="rounded-lg bg-green-600 px-4 py-2 font-medium"
                >
                    Start Robot
                </button>

                <button
                    onClick={() => setStatus('STOPPED')}
                    className="rounded-lg bg-yellow-600 px-4 py-2 font-medium"
                >
                    Stop Robot
                </button>

                <button
                    onClick={() => setStatus('ERROR')}
                    className="rounded-lg bg-red-600 px-4 py-2 font-medium"
                >
                    Emergency Stop
                </button>

                <button
                    onClick={() => setStatus('IDLE')}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-medium"
                >
                    Reset
                </button>

                <button
                    onClick={() => moveJoint(1, 10)}
                    className="rounded-lg bg-slate-700 px-4 py-2 font-medium"
                >
                    Move Joint 2 +10°
                </button>
            </div>
        </div>
    );
}
