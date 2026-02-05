import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { BatteryGauge } from "@/components/dashboard/BatteryGauge";
import { SensorGrid } from "@/components/dashboard/SensorGrid";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { WheelStatusInline } from "@/components/dashboard/WheelStatusInline";
import { cn } from "@/lib/utils";
import { Gauge, Power, Zap } from "lucide-react";
const sensors = [{
  name: "GPS",
  status: "ok" as const
}, {
  name: "LiDAR",
  status: "ok" as const
}, {
  name: "Camera",
  status: "ok" as const
}, {
  name: "Ultrasonic",
  status: "warning" as const
}, {
  name: "IMU",
  status: "ok" as const
}, {
  name: "Wheel Enc",
  status: "ok" as const
}];
export default function Vehicle() {
  return <div className="min-h-screen bg-background p-4 py-[20px] pt-[20px] pb-0">
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

      {/* Top row: Speed, Battery, Heading, Control Mode */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        {/* Speed Gauge */}
        <div className="dashboard-panel flex flex-col items-center justify-center py-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              Speed
            </span>
          </div>
          <SemiCircleGauge value={8.5} max={25} label="km/h" variant="primary" size="md" />
        </div>

        {/* Battery */}
        <MetricCard title="Battery" icon={<Zap className="w-4 h-4" />} value="" className="flex flex-col items-center justify-center py-4">
          <BatteryGauge level={72} voltage={48.2} charging={false} size="sm" />
        </MetricCard>

        {/* Vehicle Heading */}
        <MetricCard title="Heading" value="" className="flex flex-col items-center justify-center py-4">
          <CircularGauge value={127} max={360} label="Heading" unit="°" variant="primary" size="sm" />
        </MetricCard>

        {/* Manual Control */}
        <div className="dashboard-panel flex flex-col items-center justify-center py-4">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2">
            Control Mode
          </span>
          <button className={cn("control-btn control-btn-start py-3 px-4 rounded-xl text-xs w-full")}>
            <Power className="w-4 h-4 mx-auto mb-1" />
            Manual
          </button>
        </div>
      </div>

      {/* Bottom row: Sensor Health (left) + Wheel Status (right) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Sensor Health Grid - 3x2 */}
        <div className="dashboard-panel">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Sensor Health
            </span>
            <span className="text-xs text-success">5/6 OK</span>
          </div>
          <SensorGrid sensors={sensors} columns={3} />
        </div>

        {/* Wheel Status Inline */}
        <div className="dashboard-panel flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Wheel Dynamics
            </span>
            <span className="text-xs text-primary">4WS Active</span>
          </div>
          <WheelStatusInline />
        </div>
      </div>
    </div>;
}