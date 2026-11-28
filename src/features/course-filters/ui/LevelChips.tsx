// src/features/course-filters/ui/LevelChips.tsx
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { COURSE_LEVELS, type CourseLevel } from '@/entities/course';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { setLevel } from '../model/courseFiltersSlice';
import { selectCourseLevel } from '../model/selectors';

export function LevelChips() {
  const dispatch = useAppDispatch();
  const currentLevel = useAppSelector(selectCourseLevel);

  const options = [
    { value: 'all', label: 'Все' },
    ...COURSE_LEVELS.map((level) => ({ value: level, label: level })),
  ];

  const handleLevelClick = (level: CourseLevel | 'all') => {
    dispatch(setLevel(level));
  };

  return (
    <Box
      role="group"
      aria-labelledby="course-level-filter-label"
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, width: '100%' }}
    >
      {options.map((option) => {
        const isSelected = currentLevel === option.value;
        return (
          <Chip
            key={option.value}
            label={option.label}
            clickable
            color={isSelected ? 'primary' : 'default'}
            variant={isSelected ? 'filled' : 'outlined'}
            onClick={() =>
              handleLevelClick(option.value as CourseLevel | 'all')
            }
            aria-pressed={isSelected}
            size="small"
          />
        );
      })}
    </Box>
  );
}
