

## Vehicle Status Panel Enhancements

Since the Vehicle Status panel is being created as part of the previous layout restructuring, this plan incorporates the two requested changes directly into the new `VehicleStatusPanel.tsx` component.

### Changes

**1. Vehicle Mode -- Dropdown Selector**
- Replace the static "Auto" text with a `Select` dropdown (using the existing Radix Select component)
- Options: "Auto", "Manual", "RC"
- Managed with local `useState`

**2. Camera -- "View" Button**
- Replace the static "View" text with a styled `Button` component
- Clicking it can trigger a toast notification (placeholder for future camera feed)

### Technical Details

**File: `src/components/dashboard/VehicleStatusPanel.tsx`** (new file)
- Import `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem` from `@/components/ui/select`
- Import `Button` from `@/components/ui/button`
- Use `useState` for the vehicle mode value (default: "auto")
- Layout: compact key-value rows matching dashboard-panel styling
- Rows:
  - GPS: "RTK" (static text with green indicator)
  - Vehicle Mode: `<Select>` dropdown with Auto/Manual/RC options
  - GNSS: "34" (static text)
  - Camera: `<Button variant="outline" size="sm">View</Button>`
  - RC Connection: "Yes" (static text with green indicator)

**File: `src/pages/Vehicle.tsx`** (modify)
- Remove: `BatteryGauge`, `SensorGrid`, `MetricCard`, `Power`, `Zap` imports and usage
- Remove: sensors array, Battery panel, Control Mode panel, Sensor Health panel
- Add imports: `VehicleStatusPanel`, `BatteryStatusPanel`, `LinearActuatorPanel`
- Top row (`grid-cols-3`): Speed gauge, Heading gauge, Vehicle Status panel
- Bottom row (`grid-cols-3`): Battery Status, Linear Actuator, Wheel Dynamics

**Files: `src/components/dashboard/BatteryStatusPanel.tsx`** and **`LinearActuatorPanel.tsx`** (new files)
- Created as described in the previous approved plan with battery cells (B1-B5) and X/Y axis sliders respectively

