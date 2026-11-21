// src/features/notifications/index.ts
export {
  notificationsReducer,
  showNotification,
  removeNotification,
} from './model/notificationsSlice';
export { selectNotifications } from './model/selectors';
export { NotificationsHost } from './ui/NotificationsHost';
export type {
  Notification,
  NotificationType,
  NotificationsState,
} from './model/types';
