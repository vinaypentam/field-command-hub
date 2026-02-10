import { Slider } from "@/components/ui/slider";

export function LinearActuatorPanel() {
  return (
    <div className="dashboard-panel flex flex-col py-3 px-4">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-3">
        Linear Actuator
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">X-Axis</span>
            <span className="text-foreground font-medium font-mono">52%</span>
          </div>
          <Slider value={[52]} max={100} step={1} disabled className="pointer-events-none" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Y-Axis</span>
            <span className="text-foreground font-medium font-mono">30%</span>
          </div>
          <Slider value={[30]} max={100} step={1} disabled className="pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
