import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { WheelStatusInline } from "@/components/dashboard/WheelStatusInline";
import { VehicleStatusPanel } from "@/components/dashboard/VehicleStatusPanel";
import { BatteryStatusPanel } from "@/components/dashboard/BatteryStatusPanel";
import { LinearActuatorPanel } from "@/components/dashboard/LinearActuatorPanel";
import { AppHeader } from "@/components/dashboard/AppHeader";
import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";

export default function Vehicle() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader
        title="AgriBot Control"
        subtitle="Harvester-01 • Model AX-500"
        extraButtons={
          <>
            <button className={cn("control-btn py-2 px-3 rounded-lg text-xs bg-warning/20 text-warning hover:bg-warning/30 border border-warning/30")}>
              Park
            </button>
            <button className={cn("control-btn py-2 px-3 rounded-lg text-xs bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30")}>
              RTL
            </button>
          </>
        }
      />

      <div className="p-4 space-y-3">
      {/* Top row: Speed, Heading, Vehicle Status */}
      <div className="grid grid-cols-3 gap-3">
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
    </div>
  );
}
