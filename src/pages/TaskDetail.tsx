import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Bell, Maximize2, Truck, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  const [mapMaximized, setMapMaximized] = useState(false);

  if (!task) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Task not found</p>
      </div>
    );
  }

  const MapContent = ({ isMaximized = false }: { isMaximized?: boolean }) => (
    <div className={cn(
      "flex items-center justify-center relative",
      isMaximized ? "h-full" : "h-full"
    )}>
      <div className="text-center">
        <div className={cn(
          "mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center",
          isMaximized ? "w-24 h-24" : "w-16 h-16"
        )}>
          <svg
            className={cn("text-muted-foreground", isMaximized ? "w-12 h-12" : "w-8 h-8")}
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
        <span className={cn("font-semibold text-muted-foreground", isMaximized ? "text-3xl" : "text-xl")}>
          Map View
        </span>
        <p className={cn("text-muted-foreground/60 mt-1", isMaximized ? "text-sm" : "text-xs")}>
          {task.plot}
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shrink-0">
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

      {/* Main Content - Two columns */}
      <div className="flex-1 grid grid-cols-2 gap-4 p-4 pt-0 pb-20 min-h-0">
        {/* Left Column - Progress, Vehicle, Logs */}
        <div className="flex flex-col gap-3 min-h-0">
          {/* Progress Section */}
          <div className="dashboard-panel shrink-0">
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
              "dashboard-panel flex items-center justify-between cursor-pointer shrink-0",
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
          <div className="dashboard-panel flex-1 flex flex-col min-h-0">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium block mb-3 shrink-0">
              Log
            </span>
            <div className="flex-1 overflow-y-auto space-y-2 scrollbar-hide">
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
        </div>

        {/* Right Column - Map View */}
        <div className="dashboard-panel flex flex-col relative min-h-0">
          <MapContent />
          {/* Maximize Button */}
          <button
            onClick={() => setMapMaximized(true)}
            className={cn(
              "absolute bottom-3 right-3",
              "w-10 h-10 rounded-lg",
              "bg-muted/80 hover:bg-muted border border-border",
              "flex items-center justify-center",
              "text-muted-foreground hover:text-foreground",
              "transition-all duration-200 active:scale-95"
            )}
            aria-label="Maximize map"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Maximized Map Modal */}
      <Dialog open={mapMaximized} onOpenChange={setMapMaximized}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] p-0">
          <div className="relative w-full h-full bg-card rounded-lg">
            <MapContent isMaximized />
            <button
              onClick={() => setMapMaximized(false)}
              className={cn(
                "absolute top-4 right-4",
                "w-10 h-10 rounded-lg",
                "bg-muted/80 hover:bg-muted border border-border",
                "flex items-center justify-center",
                "text-muted-foreground hover:text-foreground",
                "transition-all duration-200 active:scale-95"
              )}
              aria-label="Close maximized map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}