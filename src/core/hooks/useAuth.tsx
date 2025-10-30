import { useSelector } from 'react-redux';
import { RootState } from '@/src/core/state/store';

export const useAuth = () => {
    return useSelector((state: RootState) => state.auth);
};

export const useAuthToken = () => {
    return useSelector((state: RootState) => state.auth.accessToken);
};

export const useAuthUser = () => {
    return useSelector((state: RootState) => state.auth.userId);
};

export const useIsAuthenticated = () => {
    return useSelector((state: RootState) => state.auth.isAuthenticated);
};
