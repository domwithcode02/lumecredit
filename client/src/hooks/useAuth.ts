import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";

export function useAuth() {
  const { 
    data: user, 
    isLoading,
    error
  } = useQuery<User>({
    queryKey: ["/api/auth/user"],
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: true,
    refetchInterval: 2 * 60 * 1000, // Refresh every 2 minutes
  });

  // If we get a 401 error, the user is not authenticated
  const isError = !!error;
  const isAuthError = isError && 
    // @ts-ignore - TypeScript doesn't know about the status property
    (error?.response?.status === 401 || error?.status === 401);

  return {
    user,
    isLoading: isLoading && !isError,
    isAuthenticated: !!user && !isAuthError,
    error
  };
}