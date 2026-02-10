import { cn } from "@/lib/utils";
import { Bell } from "lucide-react";
import { ReactNode } from "react";

interface AppHeaderProps {
  title: string;
  subtitle?: string;
  leftContent?: ReactNode;
  extraButtons?: ReactNode;
}

export function AppHeader({ title, subtitle, leftContent, extraButtons }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 shrink-0">
      <div className="flex items-center gap-3">
        {leftContent || (
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary text-xs font-bold">AC</span>
          </div>
        )}
        <div>
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        {extraButtons}
        <button className={cn("control-btn control-btn-emergency py-2 px-3 rounded-lg text-xs")}>
          Emergency Stop
        </button>
      </div>
    </header>
  );
}
