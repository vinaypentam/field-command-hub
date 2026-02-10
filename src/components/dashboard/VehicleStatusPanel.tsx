import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function VehicleStatusPanel() {
  const [vehicleMode, setVehicleMode] = useState("auto");

  return (
    <div className="dashboard-panel flex flex-col py-3 px-4">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-2">
        Vehicle Status
      </span>
      <div className="flex flex-col gap-2 text-sm">
        {/* GPS */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">GPS</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-success" />
            <span className="text-foreground font-medium">RTK</span>
          </div>
        </div>

        {/* Vehicle Mode */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Vehicle Mode</span>
          <Select value={vehicleMode} onValueChange={setVehicleMode}>
            <SelectTrigger className="h-7 w-24 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
              <SelectItem value="rc">RC</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* GNSS */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">GNSS</span>
          <span className="text-foreground font-medium">34</span>
        </div>

        {/* Camera */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Camera</span>
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs px-3"
            onClick={() => toast({ title: "Camera", description: "Camera feed coming soon." })}
          >
            View
          </Button>
        </div>

        {/* RC Connection */}
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">RC Connection</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-success" />
            <span className="text-foreground font-medium">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
