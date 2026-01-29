import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { cn } from "@/lib/utils";
import { Clock, MapPin, Pause, Play, Square, Target } from "lucide-react";

export default function Task() {
  const taskProgress = 67;
  const areaCovered = 8.4;
  const areaTotal = 12.5;
  const timeRemaining = "1h 15m";
  const taskStatus: "active" | "paused" | "completed" = "active";

  return (
    <div className="min-h-screen bg-background pb-20 pt-16 p-4">
      {/* Title */}
      <header className="mb-4">
        <h1 className="text-xl font-semibold text-foreground">Current Task</h1>
        <p className="text-xs text-muted-foreground">Real-time task monitoring</p>
      </header>

      {/* Main grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Central Progress Ring - Large */}
        <div className="dashboard-panel col-span-2 flex flex-col items-center py-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Task Progress
            </span>
          </div>
          <ProgressRing
            value={taskProgress}
            max={100}
            label=""
            variant="success"
            size="lg"
          />
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold text-foreground">Harvesting</h2>
            <p className="text-sm text-muted-foreground">North Field - Section A</p>
          </div>
        </div>

        {/* Task Type */}
        <MetricCard title="Task Type" value="Harvest" variant="default" size="md" />

        {/* Field */}
        <MetricCard title="Field" icon={<MapPin className="w-4 h-4" />} value="North Field" size="md" />

        {/* Area Covered */}
        <div className="dashboard-panel">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium block mb-2">
            Area Covered
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-mono font-bold text-success">{areaCovered}</span>
            <span className="text-sm text-muted-foreground">/ {areaTotal} ha</span>
          </div>
          {/* Mini progress bar */}
          <div className="mt-3 h-2 bg-gauge-track rounded-full overflow-hidden">
            <div
              className="h-full bg-success rounded-full transition-all duration-500"
              style={{ width: `${(areaCovered / areaTotal) * 100}%` }}
            />
          </div>
        </div>

        {/* Time Remaining */}
        <MetricCard
          title="Est. Remaining"
          icon={<Clock className="w-4 h-4" />}
          value={timeRemaining}
          size="md"
        />

        {/* Stats Row */}
        <div className="dashboard-panel col-span-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3 block">
            Session Statistics
          </span>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center p-2 bg-gauge-bg rounded-lg">
              <span className="text-xl font-mono font-bold text-foreground">2.4</span>
              <span className="text-[10px] text-muted-foreground block">Hours</span>
            </div>
            <div className="text-center p-2 bg-gauge-bg rounded-lg">
              <span className="text-xl font-mono font-bold text-foreground">8.5</span>
              <span className="text-[10px] text-muted-foreground block">km/h Avg</span>
            </div>
            <div className="text-center p-2 bg-gauge-bg rounded-lg">
              <span className="text-xl font-mono font-bold text-foreground">12.3</span>
              <span className="text-[10px] text-muted-foreground block">km Dist</span>
            </div>
            <div className="text-center p-2 bg-gauge-bg rounded-lg">
              <span className="text-xl font-mono font-bold text-success">98%</span>
              <span className="text-[10px] text-muted-foreground block">Efficiency</span>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="col-span-2 grid grid-cols-3 gap-3">
          <button
            className={cn(
              "control-btn py-4 rounded-xl flex flex-col items-center gap-1",
              taskStatus === "active" ? "control-btn-stop" : "control-btn-start"
            )}
          >
            {taskStatus === "active" ? (
              <>
                <Pause className="w-6 h-6" />
                <span className="text-xs">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                <span className="text-xs">Resume</span>
              </>
            )}
          </button>
          <button className="control-btn control-btn-emergency py-4 rounded-xl flex flex-col items-center gap-1">
            <Square className="w-6 h-6" />
            <span className="text-xs">Stop Task</span>
          </button>
          <button className="control-btn bg-secondary text-secondary-foreground hover:bg-secondary/80 py-4 rounded-xl flex flex-col items-center gap-1">
            <Target className="w-6 h-6" />
            <span className="text-xs">New Task</span>
          </button>
        </div>
      </div>
    </div>
  );
}
