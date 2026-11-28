import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link as RouterLink } from 'react-router';
import { ROUTES } from '@/shared/config/routes';
import type { Course } from '../model/typesCourses';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <CardContent
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            <Box
              component={RouterLink}
              to={ROUTES.course(course.id)}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 2,
                  borderRadius: 1,
                },
              }}
            >
              {course.title}
            </Box>
          </Typography>
          <Chip
            label={course.level}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Stack>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {course.description}
        </Typography>

        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: 'primary.main' }}
            >
              {course.price.toLocaleString('ru-RU')} ₽
            </Typography>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ alignItems: 'center', color: 'text.secondary' }}
            >
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2">{course.duration} ч</Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: 'center', mt: 1 }}
          >
            <Rating
              value={course.rating}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              {course.rating.toFixed(1)}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
