

## Plot Mapping Page - Layout Adjustments

### Changes from Previous Plan

Two adjustments to the right column layout:

1. **Camera section height**: Set to 40% of the page height (`h-[40vh]`) instead of auto-sizing
2. **Start button placement**: Positioned below the camera section (outside/after it), not inside it

### Right Column Layout

```text
|--- Right 25% ---|
| Camera           |
| [placeholder     |
|  40% of page     |
|  height]         |
|                  |
|------------------|
| [Start]          |  <-- below camera
|                  |
| (after start:    |
|  Finish, Pause,  |
|  Capture)        |
|__________________|
```

### Technical Details

**`src/pages/PlotMapping.tsx`** (new file)
- Right column structure:
  - Camera panel: `h-[40vh]` with a placeholder background
  - Controls area below camera: contains Start button (or Finish/Pause/Capture after starting)
- All other details remain the same as the approved plan:
  - Three-column grid (`grid-cols-4`: 1/2/1 split)
  - Full height, no scrolling
  - Arm/Disarm toggle, Start->Finish/Pause/Capture flow
  - AlertDialog for Finish confirmation
  - Mock coordinates table (P1-P6)

**`src/pages/PlotCreate.tsx`** -- "Create File" navigates to `/fields/plot-map`

**`src/App.tsx`** -- Add `/fields/plot-map` route

