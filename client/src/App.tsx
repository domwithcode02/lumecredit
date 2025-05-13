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
  const isAuthenticated = document.cookie.includes('auth_token');
  
  if (isAuthenticated && window.location.pathname === '/login') {
    window.location.replace('/app');
    return null;
  }
  
  if (!isAuthenticated && window.location.pathname !== '/login') {
    window.location.replace('/login');
    return null;
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/app" component={isAuthenticated ? HomePage : LoginPage} />
      <Route path="/faq" component={isAuthenticated ? FAQPage : LoginPage} />
      <Route path="/" component={() => {
        window.location.href = isAuthenticated ? '/app' : '/login';
        return null;
      }} />
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
