// src/features/course-filters/ui/CourseLevelFilter.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LevelChips } from './LevelChips';
import { ResetFiltersButton } from './ResetFiltersButton';

export function CourseLevelFilter() {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1,
        }}
      >
        <Typography
          id="course-level-filter-label"
          variant="subtitle2"
          sx={{ color: 'text.secondary' }}
        >
          Уровень:
        </Typography>
        <ResetFiltersButton />
      </Box>

      <LevelChips />
    </Box>
  );
}
