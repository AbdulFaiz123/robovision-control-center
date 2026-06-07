'use client';
import { useRobotStore } from '../store/robotStore';

export function TelemetryPanel() {
    const telemetry = useRobotStore((state) => state.telemetry);

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-4">Robot Telemetry</h2>

            <div className="space-y-4">
                <TelemetryCard label="Robot ID" value={telemetry.robotId} />
                <TelemetryCard label="Status" value={telemetry.status} />
                <TelemetryCard label="Battery" value={`${telemetry.battery}%`} />
                <TelemetryCard label="Temperature" value={`${telemetry.temperature}°C`} />
                <TelemetryCard
                    label="Joint Angles"
                    value={telemetry.jointAngles.join(', ')}
                />
            </div>
        </div>
    );
}

function TelemetryCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}