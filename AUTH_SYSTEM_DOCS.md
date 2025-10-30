# Auth System Usage

## RefreshTokenProvider

The `RefreshTokenProvider` is the entry point of the application. It automatically:

1. Calls the refresh token API (`/v1/auth/refresh-token`) when the application starts
2. Shows a loader page while the API is loading  
3. Stores the `accessToken` and `userId` in Redux state
4. Sets `isAuthenticated` to `true` on success or `false` on failure

## Usage in Components

```typescript
import { useAuth, useAuthToken, useIsAuthenticated } from '@/src/core/hooks/useAuth';

function MyComponent() {
    const { accessToken, userId, isAuthenticated } = useAuth();
    // or use individual hooks
    const token = useAuthToken();
    const isAuth = useIsAuthenticated();

    if (!isAuthenticated) {
        return <div>Please log in</div>;
    }

    return <div>Welcome user {userId}!</div>;
}
```

## Auth State Structure

```typescript
type AuthSliceState = {
    accessToken?: string;
    userId?: string;
    isAuthenticated: boolean;
}
```

## Actions Available

- `setAuthData({ accessToken?, userId })` - Set auth data and mark as authenticated
- `clearAuthData()` - Clear all auth data and mark as unauthenticated

## API Response Types

- `RefreshTokenResponse` - Contains only `accessToken` and `userId`
- `AuthResponse` - Full auth response for login/register flows

## Provider Integration

The provider is already integrated in the main `Providers` component and wraps the entire application.
