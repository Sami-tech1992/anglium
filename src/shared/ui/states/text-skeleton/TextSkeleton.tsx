import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

interface TextSkeletonProps {
  lines?: number;
}

export function TextSkeleton({ lines = 4 }: TextSkeletonProps) {
  const widths = ['100%', '90%', '80%', '70%', '60%', '50%'];

  return (
    <Stack spacing={1} aria-busy="true">
      <Typography
        role="status"
        aria-live="polite"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Загрузка текста...
      </Typography>

      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={widths[i % widths.length]}
          height={24}
          aria-hidden="true"
        />
      ))}
    </Stack>
  );
}
