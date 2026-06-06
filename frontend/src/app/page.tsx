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
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900 p-6 min-h-[420px]">
          <h2 className="text-xl font-semibold mb-4">3D Robot View</h2>
          <div className="h-[340px] rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
            Robot 3D placeholder — Day 2 mein Three.js robot yahan aayega
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold mb-4">Robot Telemetry</h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Robot ID</p>
              <p className="text-lg font-semibold">MAIRA-SIM-01</p>
            </div>

            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Status</p>
              <p className="text-lg font-semibold text-green-400">IDLE</p>
            </div>

            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Battery</p>
              <p className="text-lg font-semibold">87%</p>
            </div>

            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">Temperature</p>
              <p className="text-lg font-semibold">42°C</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold mb-4">Control Panel</h2>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-green-600 px-4 py-2 font-medium">
              Start Robot
            </button>
            <button className="rounded-lg bg-yellow-600 px-4 py-2 font-medium">
              Stop Robot
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-2 font-medium">
              Emergency Stop
            </button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium">
              Reset
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold mb-4">System Logs</h2>

          <div className="rounded-lg bg-black p-4 font-mono text-sm text-green-400 min-h-[140px]">
            <p>[10:00:00] Dashboard initialized</p>
            <p>[10:00:01] Waiting for robot connection...</p>
          </div>
        </div>
      </section>
    </main>
  );
}