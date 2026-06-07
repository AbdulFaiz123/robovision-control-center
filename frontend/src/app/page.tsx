import { ControlPanel } from "@/components/ControlPanel";
import { RobotScene } from "@/components/RobotScene";
import { TelemetryPanel } from "@/components/TelemetryPanel";
import { LogPanel } from "@/components/LogPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <section className="mb-6">
        <p className="text-sm text-slate-400">NEURA-inspired demo project</p>
        <h1 className="text-3xl font-bold">RoboVision Control Center</h1>
        <p className="text-slate-300 mt-2">
          Real-time robot monitoring, visualization, and control dashboard.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RobotScene />
        </div>

        <TelemetryPanel />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ControlPanel />
        <LogPanel />
      </section>
    </main>
  );
}