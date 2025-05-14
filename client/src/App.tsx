import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import FAQPage from "@/pages/FAQPage";
import LoginPage from "@/pages/LoginPage";
import { useAuth } from "./hooks/useAuth";

// Protected route component that redirects to login if not authenticated
function ProtectedRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated, isLoading } = useAuth();
  const [location] = useLocation();
  
  // While checking authentication, show a simple loading state
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div style={{ 
          width: '40px', 
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #003366',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }
  
  // If authenticated, render the component, otherwise redirect to login
  return isAuthenticated ? <Component {...rest} /> : <Redirect to="/login" />;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/app">
        <ProtectedRoute component={HomePage} />
      </Route>
      <Route path="/faq">
        <ProtectedRoute component={FAQPage} />
      </Route>
      <Route path="/">
        <ProtectedRoute component={HomePage} />
      </Route>
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
