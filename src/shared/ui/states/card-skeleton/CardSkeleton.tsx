import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface CardSkeletonProps {
  count?: number;
}

export function CardSkeleton({ count = 4 }: CardSkeletonProps) {
  return (
    <Box aria-busy="true">
      {/* Скрытое сообщение для скринридеров */}
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
        Загрузка карточек...
      </Typography>

      <Grid container spacing={2}>
        {Array.from({ length: count }).map((_, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }} aria-hidden="true">
            <Card>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton variant="text" width="80%" height={32} />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="60%" />
                <Box sx={{ mt: 2 }}>
                  <Skeleton variant="rounded" width={80} height={24} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
