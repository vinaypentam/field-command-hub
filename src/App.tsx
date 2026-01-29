import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Truck, Target, Map } from "lucide-react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { FloatingButtons } from "@/components/navigation/FloatingButtons";
import Dashboard from "./pages/Dashboard";
import Vehicle from "./pages/Vehicle";
import Task from "./pages/Task";
import Fields from "./pages/Fields";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Vehicle", icon: Truck, path: "/vehicle" },
  { label: "Task", icon: Target, path: "/task" },
  { label: "Fields", icon: Map, path: "/fields" },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen bg-background">
          <FloatingButtons />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/task" element={<Task />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav items={navItems} />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
