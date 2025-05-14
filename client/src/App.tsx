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
  // Routing with direct navigation to home page
  const currentLocation = window.location.pathname;
  
  // Directly redirect to home page from root
  if (currentLocation === '/') {
    window.location.href = '/app';
    return <div>Redirecting...</div>;
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/app" component={HomePage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/" component={HomePage} />
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
