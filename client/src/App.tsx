import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import FAQPage from "@/pages/FAQPage";
import LoginPage from "@/pages/LoginPage";

function Router() {
  // Check if auth token exists in cookies
  const isAuthenticated = document.cookie.includes('auth_token');

  // Redirect to login if not authenticated and trying to access protected routes
  if (!isAuthenticated && window.location.pathname !== '/login') {
    window.location.href = '/login';
    return null;
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/app" component={isAuthenticated ? HomePage : LoginPage} />
      <Route path="/faq" component={isAuthenticated ? FAQPage : LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
