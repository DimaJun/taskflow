import { RootState } from '@/app/providers/store';

export const isAuthorized = (state: RootState) => state.auth.isAuthorized;
export const getUserData = (state: RootState) => state.auth.userData;
