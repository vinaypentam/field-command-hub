

## Task Detail Page Redesign (`/task/:id`)

### Overview
Restructure the Task Detail page from a 2-column layout to a 3-column layout (25% / 50% / 25%) matching the wireframe, with new interactive controls.

### New Layout

```text
|--- 25% Left ---------|------ 50% Center ------|--- 25% Right ----------|
| Pre-Checks            |                        | Progress        50%   |
|  Ready to Arm   Yes * |                        | [progress bar]        |
|  GPS            RTK * |        Map              | Plot          Plot A  |
|  GNSS            34 * |     [placeholder]       | Time         1:30:25  |
|  Vehicle Mode  Auto v |                        |                       |
|  [Arm]               |                        |------------------------|
|-----------------------|                        | Logs                  |
| Camera                |                        |  05:36:26 -> msg      |
| [placeholder 40vh]    |                        |  05:36:30 -> msg      |
|                       |                        |  ...                  |
|-----------------------|                        |                       |
| [Start]              |                        |                       |
|_______________________|________________________|_______________________|
```

### Interactive Behaviors

1. **Arm/Disarm toggle**: Button text toggles between "Arm" and "Disarm" on click
2. **Vehicle Mode dropdown**: Select component with Auto, Manual, RC options
3. **Start button**: On click, replaced by two buttons:
   - **Pause** (toggles to "Resume" on click)
   - **Stop** (stops the task)

### Technical Details

**File: `src/pages/TaskDetail.tsx`** (rewrite)

- Change grid from `grid-cols-2` to `grid-cols-4` (col-span-1 / col-span-2 / col-span-1)
- Keep existing `AppHeader` with back button (unchanged)
- Remove: Vehicle card, map maximize button/dialog

**Left column (col-span-1):**
- Pre-Checks panel (same style as PlotMapping): Ready to Arm, GPS, GNSS with green status dots, Vehicle Mode as `Select` dropdown (Auto/Manual/RC)
- Arm/Disarm button below pre-checks
- Camera section: `h-[40vh]` placeholder
- Start button below camera; after clicking: Pause and Stop buttons replace it

**Center column (col-span-2):**
- Map placeholder (full height)

**Right column (col-span-1):**
- Progress panel: progress bar with percentage, Plot name, Time (static "1:30:25")
- Logs panel: scrollable log entries (reuse existing mock data)

**New state variables:**
- `isArmed` (boolean) for Arm/Disarm toggle
- `vehicleMode` (string) for dropdown
- `isStarted` (boolean) for Start vs Pause/Stop
- `isPaused` (boolean) for Pause/Resume toggle

**Imports to add:** `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `Button`, `Camera`, `MapPin`
**Imports to remove:** `ArrowRight`, `Maximize2`, `Truck`, `X`, `Dialog`, `DialogContent`
