// src/features/course-filters/ui/ResetFiltersButton.tsx
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { resetFilters } from '../model/courseFiltersSlice';
import { selectHasActiveFilters } from '../model/selectors';

export function ResetFiltersButton() {
  const dispatch = useAppDispatch();
  const hasActiveFilters = useAppSelector(selectHasActiveFilters);

  if (!hasActiveFilters) return null;

  return (
    <Button
      size="small"
      onClick={() => dispatch(resetFilters())}
      sx={{ textTransform: 'none' }}
    >
      Сбросить фильтры
    </Button>
  );
}
