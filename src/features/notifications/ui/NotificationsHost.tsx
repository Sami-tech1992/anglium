// src/features/notifications/ui/NotificationsHost.tsx
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppSelector, useAppDispatch } from '@/shared/lib';
import { selectNotifications } from '../model/selectors';
import { removeNotification } from '../model/notificationsSlice';
import { useAutoHideNotification } from '../lib/useAutoHideNotification';

export function NotificationsHost() {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  // Берем первое уведомление из списка (показываем по одному)
  const current = notifications[0];

  // Автоскрытие через 5 секунд (логика вынесена в хук)
  useAutoHideNotification(current?.id);

  // Закрытие вручную
  const handleClose = (
    _event: React.SyntheticEvent | Event | null,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') return;
    if (current) dispatch(removeNotification(current.id));
  };

  return (
    <Snackbar
      open={!!current}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={current?.type || 'info'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {current?.text}
      </Alert>
    </Snackbar>
  );
}
