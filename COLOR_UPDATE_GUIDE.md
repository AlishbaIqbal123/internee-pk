# Color Scheme Update Guide

## New Color Scheme (Matching Internee.pk)

The website now uses an indigo/purple color scheme instead of pink:

- **Primary Color**: `#6366f1` (Indigo)
- **Secondary Color**: `#8b5cf6` (Purple)
- **Accent Color**: `#a78bfa` (Light Purple)
- **Gradient**: `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`

## Color Replacements

Replace these colors across all CSS files:

| Old Color | New Color | Usage |
|-----------|-----------|-------|
| `#ff69b4` | `#6366f1` | Primary pink → Indigo |
| `#ff5ca8` | `#8b5cf6` | Dark pink → Purple |
| `#ffb6c1` | `#a78bfa` | Light pink → Light purple |
| `#ffc0cb` | `#c4b5fd` | Very light pink → Very light purple |
| `rgba(255, 105, 180, ...)` | `rgba(99, 102, 241, ...)` | Pink rgba → Indigo rgba |
| `rgba(255, 92, 168, ...)` | `rgba(139, 92, 246, ...)` | Dark pink rgba → Purple rgba |

## Components Updated

✅ Header.css
✅ HeroSection.css
✅ App.css (CSS Variables)
✅ Dashboard.css
✅ Internship.css
✅ JobPortal.css
✅ GraduateProgram.css
✅ StudentAmbassador.css

## Components Still Needing Updates

- TaskManagementPlatform.css
- TechInstructor.css
- ProfessionalDevelopment.css
- AIMockInterviews.css
- HowItWorks.css
- AICareerCoach.css
- FinalCTA.css
- DreamInternship.css
- Testimonials.css
- Newsletter.css
- Footer.css
- ScrollToTop.css
- Partners.css

## Quick Update Script

For Windows PowerShell, you can use:

```powershell
Get-ChildItem -Path "src/components" -Filter "*.css" -Recurse | ForEach-Object {
    (Get-Content $_.FullName) -replace '#ff69b4', '#6366f1' -replace '#ff5ca8', '#8b5cf6' -replace '#ffb6c1', '#a78bfa' | Set-Content $_.FullName
}
```

Or manually search and replace in your IDE:
1. Find: `#ff69b4` → Replace: `#6366f1`
2. Find: `#ff5ca8` → Replace: `#8b5cf6`
3. Find: `rgba(255, 105, 180` → Replace: `rgba(99, 102, 241`
4. Find: `rgba(255, 92, 168` → Replace: `rgba(139, 92, 246`

## Background Colors

Update background gradients:
- `linear-gradient(135deg, #ff69b4 0%, #ff5ca8 100%)` → `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`
- Light backgrounds can stay as is or use `#f8f9fa` for consistency

