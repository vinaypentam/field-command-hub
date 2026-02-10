import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { WheelStatusInline } from "@/components/dashboard/WheelStatusInline";
import { VehicleStatusPanel } from "@/components/dashboard/VehicleStatusPanel";
import { BatteryStatusPanel } from "@/components/dashboard/BatteryStatusPanel";
import { LinearActuatorPanel } from "@/components/dashboard/LinearActuatorPanel";
import { cn } from "@/lib/utils";
import { Bell, Gauge } from "lucide-react";

export default function Vehicle() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-16 p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold text-foreground">AgriBot Control</h1>
          <p className="text-xs text-muted-foreground">Harvester-01 • Model AX-500</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className={cn("control-btn control-btn-emergency py-2 px-3 rounded-lg text-xs")}>
            Emergency Stop
          </button>
        </div>
      </header>

      {/* Top row: Speed, Heading, Vehicle Status */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="dashboard-panel flex flex-col items-center justify-center py-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Gauge className="w-4 h-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Speed</span>
          </div>
          <SemiCircleGauge value={8.5} max={25} label="km/h" variant="primary" size="md" />
        </div>

        <div className="dashboard-panel flex flex-col items-center justify-center py-4">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2">Heading</span>
          <CircularGauge value={127} max={360} label="Heading" unit="°" variant="primary" size="sm" />
        </div>

        <VehicleStatusPanel />
      </div>

      {/* Bottom row: Battery Status, Linear Actuator, Wheel Dynamics */}
      <div className="grid grid-cols-3 gap-3">
        <BatteryStatusPanel />
        <LinearActuatorPanel />
        <div className="dashboard-panel flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Wheel Dynamics</span>
            <span className="text-xs text-primary">4WS Active</span>
          </div>
          <WheelStatusInline />
        </div>
      </div>
    </div>
  );
}
