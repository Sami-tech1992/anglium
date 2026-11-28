// src/shared/lib/index.ts
export { useAppSelector, useAppDispatch } from './redux';
export { LinkBehavior } from './LinkBehavior';
export {
  isFetchBaseQueryError,
  isSerializedError,
  getHumanReadableError,
} from './error/errorGuards';
export type { AppError } from './error/errorGuards';
