import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { BatteryGauge } from "@/components/dashboard/BatteryGauge";
import { SensorGrid } from "@/components/dashboard/SensorGrid";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { cn } from "@/lib/utils";
import { Gauge, Power, Zap } from "lucide-react";

const sensors = [
  { name: "GPS", status: "ok" as const },
  { name: "LiDAR", status: "ok" as const },
  { name: "Camera", status: "ok" as const },
  { name: "Ultrasonic", status: "warning" as const },
  { name: "IMU", status: "ok" as const },
  { name: "Wheel Enc", status: "ok" as const },
];

export default function Vehicle() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-16 p-4">
      {/* Header with Emergency Stop */}
      <header className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Vehicle Control</h1>
          <p className="text-xs text-muted-foreground">Harvester-01 • Model AX-500</p>
        </div>
        <button className={cn("control-btn control-btn-emergency py-3 px-4 rounded-xl text-sm")}>
          <span className="text-lg font-bold">⚠</span>
          <span className="block text-[10px] mt-0.5">E-STOP</span>
        </button>
      </header>

      {/* Main instrument cluster grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Large Speed Gauge - Center piece */}
        <div className="dashboard-panel col-span-2 flex flex-col items-center justify-center py-6">
          <div className="flex items-center gap-2 mb-4">
            <Gauge className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Speed
            </span>
          </div>
          <SemiCircleGauge
            value={8.5}
            max={25}
            label="km/h"
            variant="primary"
            size="lg"
          />
        </div>

        {/* Battery */}
        <MetricCard title="Battery System" icon={<Zap className="w-4 h-4" />} value="" className="flex flex-col items-center justify-center py-4">
          <BatteryGauge level={72} voltage={48.2} charging={false} size="md" />
        </MetricCard>

        {/* Motor RPM */}
        <MetricCard title="Motor RPM" icon={<Power className="w-4 h-4" />} value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={2400}
            max={4000}
            label="RPM"
            variant="primary"
            size="md"
          />
        </MetricCard>

        {/* Sensor Health Grid */}
        <div className="dashboard-panel col-span-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Sensor Health
            </span>
            <span className="text-xs text-success">5/6 OK</span>
          </div>
          <SensorGrid sensors={sensors} columns={3} />
        </div>

        {/* Vehicle Heading */}
        <MetricCard title="Vehicle Heading" value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={127}
            max={360}
            label="Heading"
            unit="°"
            variant="primary"
            size="md"
          />
        </MetricCard>

        {/* Manual Control */}
        <div className="dashboard-panel flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">
            Control Mode
          </span>
          <button className={cn("control-btn control-btn-start py-4 px-6 rounded-xl text-sm w-full")}>
            <Power className="w-5 h-5 mx-auto mb-1" />
            Switch to Manual
          </button>
        </div>

      </div>
    </div>
  );
}
