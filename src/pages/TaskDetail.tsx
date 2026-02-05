import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Bell, Truck } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

// Mock task data
const tasksData: Record<string, { name: string; plot: string; progress: number; status: string }> = {
  "1": { name: "Seedling planting", plot: "Plot A", progress: 0, status: "pending" },
  "2": { name: "Fertilizer spray", plot: "Plot B", progress: 50, status: "active" },
  "3": { name: "Harvesting wheat", plot: "Plot C", progress: 100, status: "completed" },
};

// Mock log entries
const logEntries = [
  { time: "05:36:26", message: "Task initialized successfully" },
  { time: "05:36:30", message: "Vehicle connected to GPS" },
  { time: "05:37:15", message: "Starting path calculation" },
  { time: "05:38:02", message: "Navigation started" },
];

export default function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const task = id ? tasksData[id] : null;

  if (!task) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Task not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 pt-4 p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/task")}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full",
              "bg-card/90 border border-border",
              "text-muted-foreground hover:text-foreground hover:bg-card",
              "transition-all duration-200 active:scale-95"
            )}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">{task.name}</h1>
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

      <div className="space-y-4">
        {/* Progress Section */}
        <div className="dashboard-panel">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Progress
            </span>
            <span className="text-sm font-mono text-primary">{task.progress}%</span>
          </div>
          <Progress value={task.progress} className="h-2" />
        </div>

        {/* Vehicle Card */}
        <div
          onClick={() => navigate("/vehicle")}
          className={cn(
            "dashboard-panel flex items-center justify-between cursor-pointer",
            "hover:border-primary/30 transition-colors"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground">Harvester-01</h3>
              <p className="text-xs text-muted-foreground">Model AX-500</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Log Section */}
        <div className="dashboard-panel">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium block mb-3">
            Log
          </span>
          <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-hide">
            {logEntries.map((entry, index) => (
              <div
                key={index}
                className="text-xs font-mono text-muted-foreground bg-muted/30 rounded-lg px-3 py-2"
              >
                <span className="text-primary">{entry.time}</span>
                <span className="mx-2">→</span>
                <span>{entry.message}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map View Placeholder */}
        <div className="dashboard-panel flex-1 min-h-[200px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <span className="text-2xl font-semibold text-muted-foreground">Map View</span>
            <p className="text-xs text-muted-foreground/60 mt-1">{task.plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
