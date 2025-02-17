import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index"; // Імпортуємо типи

// Типізований useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Типізований useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
