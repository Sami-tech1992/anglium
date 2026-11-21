// src/app/store/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../app/store/store';

// Типизированный хук для чтения состояния
export const useAppSelector = useSelector.withTypes<RootState>();

// Типизированный хук для отправки действий
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
