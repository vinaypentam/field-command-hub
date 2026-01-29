import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { SemiCircleGauge } from "@/components/dashboard/SemiCircleGauge";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { StatusIndicator } from "@/components/dashboard/StatusIndicator";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { MiniMap } from "@/components/dashboard/MiniMap";
import { BatteryGauge } from "@/components/dashboard/BatteryGauge";
import { Activity, AlertTriangle, Clock, Tractor } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pb-20 p-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Tractor className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AgriBot Control</h1>
            <p className="text-xs text-muted-foreground">Farm Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-min">
        {/* Vehicle Status - Large */}
        <div className="dashboard-panel col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Vehicle Status
            </span>
            <Activity className="w-4 h-4 text-success" />
          </div>
          <div className="flex flex-col items-center">
            <StatusIndicator status="success" label="Harvester-01" size="lg" />
            <div className="mt-4 flex gap-6">
              <div className="text-center">
                <span className="text-2xl font-mono font-bold text-foreground">4.2</span>
                <span className="text-xs text-muted-foreground block">Hours Today</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-mono font-bold text-success">ACTIVE</span>
                <span className="text-xs text-muted-foreground block">Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Speed Gauge */}
        <MetricCard title="Speed" icon={<Activity className="w-4 h-4" />} value="" className="flex flex-col items-center justify-center">
          <SemiCircleGauge
            value={8.5}
            max={20}
            label="km/h"
            variant="primary"
            size="md"
          />
        </MetricCard>

        {/* Battery Level */}
        <MetricCard title="Power" value="" className="flex flex-col items-center justify-center">
          <BatteryGauge level={72} voltage={48.2} size="md" />
        </MetricCard>

        {/* Task Progress */}
        <MetricCard title="Current Task" value="" className="flex flex-col items-center justify-center">
          <ProgressRing
            value={67}
            max={100}
            label="Harvesting - North Field"
            variant="success"
            size="md"
          />
        </MetricCard>

        {/* Map Panel - Spans 2 columns */}
        <MiniMap className="col-span-2 row-span-2" />

        {/* Fuel/Energy */}
        <MetricCard title="Fuel Level" value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={85}
            max={100}
            label="Diesel Tank"
            unit="%"
            variant="success"
            size="md"
          />
        </MetricCard>

        {/* Temperature */}
        <MetricCard title="Engine Temp" value="" className="flex flex-col items-center justify-center">
          <CircularGauge
            value={78}
            max={120}
            label="°C"
            unit="°C"
            variant="warning"
            size="md"
          />
        </MetricCard>

        {/* Alerts Panel */}
        <div className="dashboard-panel col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Active Alerts
            </span>
            <span className="flex items-center gap-1 text-xs text-warning">
              <AlertTriangle className="w-3 h-3" />
              <span>1 Warning</span>
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg bg-warning/10 border border-warning/20">
              <div className="w-2 h-2 rounded-full bg-warning status-pulse" />
              <div className="flex-1">
                <p className="text-sm text-foreground">Low fuel warning at 15%</p>
                <p className="text-xs text-muted-foreground">Expected in 2 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-success" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">All systems operational</p>
                <p className="text-xs text-muted-foreground">Last check: 2 min ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Area Covered Today */}
        <MetricCard
          title="Area Covered"
          value="12.4"
          unit="hectares"
          variant="success"
          size="lg"
          className="col-span-1"
        />

        {/* Distance Traveled */}
        <MetricCard
          title="Distance"
          value="28.7"
          unit="km"
          size="lg"
          className="col-span-1"
        />
      </div>
    </div>
  );
}
