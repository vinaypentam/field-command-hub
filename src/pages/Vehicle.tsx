import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { BatteryGauge } from "@/components/dashboard/BatteryGauge";
import { SensorGrid } from "@/components/dashboard/SensorGrid";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { cn } from "@/lib/utils";
import { Gauge, Power, Thermometer, Zap } from "lucide-react";

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
      {/* Title */}
      <header className="mb-4">
        <h1 className="text-xl font-semibold text-foreground">Vehicle Control</h1>
        <p className="text-xs text-muted-foreground">Harvester-01 • Model AX-500</p>
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

        {/* Temperature */}
        <MetricCard title="Engine Temp" icon={<Thermometer className="w-4 h-4" />} value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={78}
            max={120}
            label="Temperature"
            unit="°C"
            variant={78 > 90 ? "danger" : 78 > 75 ? "warning" : "success"}
            size="md"
          />
        </MetricCard>

        {/* Oil Pressure */}
        <MetricCard title="Hydraulic Pressure" value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={42}
            max={60}
            label="Hydraulics"
            unit="PSI"
            variant="success"
            size="md"
          />
        </MetricCard>

        {/* Voltage readings */}
        <div className="dashboard-panel col-span-2 lg:col-span-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3 block">
            Power Distribution
          </span>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center p-3 bg-gauge-bg rounded-lg">
              <span className="text-2xl font-mono font-bold text-foreground">48.2</span>
              <span className="text-xs text-muted-foreground block mt-1">Main (V)</span>
            </div>
            <div className="text-center p-3 bg-gauge-bg rounded-lg">
              <span className="text-2xl font-mono font-bold text-foreground">12.1</span>
              <span className="text-xs text-muted-foreground block mt-1">Aux (V)</span>
            </div>
            <div className="text-center p-3 bg-gauge-bg rounded-lg">
              <span className="text-2xl font-mono font-bold text-success">24.5</span>
              <span className="text-xs text-muted-foreground block mt-1">Current (A)</span>
            </div>
            <div className="text-center p-3 bg-gauge-bg rounded-lg">
              <span className="text-2xl font-mono font-bold text-foreground">1.18</span>
              <span className="text-xs text-muted-foreground block mt-1">Power (kW)</span>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="dashboard-panel col-span-2 lg:col-span-4">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4 block">
            Vehicle Controls
          </span>
          <div className="grid grid-cols-3 gap-3">
            <button className={cn("control-btn control-btn-start py-4 rounded-xl text-sm")}>
              <Power className="w-5 h-5 mx-auto mb-1" />
              Start
            </button>
            <button className={cn("control-btn control-btn-stop py-4 rounded-xl text-sm")}>
              <Power className="w-5 h-5 mx-auto mb-1" />
              Stop
            </button>
            <button className={cn("control-btn control-btn-emergency py-4 rounded-xl text-sm")}>
              <span className="text-lg font-bold">⚠</span>
              <span className="block text-[10px] mt-1">EMERGENCY</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
