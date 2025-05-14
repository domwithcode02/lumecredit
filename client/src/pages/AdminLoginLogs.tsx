import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoginLog {
  timestamp: string;
  username: string;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  message?: string;
}

export default function AdminLoginLogs() {
  const [location, setLocation] = useLocation();
  const [logs, setLogs] = useState<LoginLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract token from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);
        
        // Use the token from URL or try to get it from localStorage
        const authToken = token || localStorage.getItem('adminToken');
        
        if (!authToken) {
          throw new Error("No authentication token provided");
        }
        
        const response = await fetch(`/api/admin/login-logs?token=${authToken}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch login logs. You may not have permission.");
        }
        
        const data = await response.json();
        setLogs(data.logs || []);
        
        // If we got this far with a token in the URL, save it to localStorage for future use
        if (token) {
          localStorage.setItem('adminToken', token);
          // Clean URL by removing token parameter
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [token]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    }).format(date);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userData');
    localStorage.removeItem('adminToken');
    
    // Redirect to login page
    setLocation('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-slate-800" />
          <p className="mt-2 text-slate-600">Loading login logs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Error</CardTitle>
            <CardDescription>Failed to load login logs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{error}</p>
            <div className="flex space-x-2">
              <Button onClick={() => window.location.reload()}>Try Again</Button>
              <Button variant="outline" onClick={() => setLocation('/auth')}>Back to Login</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">LumeCredit Admin - Login Logs</h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Login Activity Log</CardTitle>
            <CardDescription>Showing the most recent {logs.length} login attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Time</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Username</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">IP Address</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-700">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-4 text-center text-slate-500">
                        No login attempts recorded yet
                      </td>
                    </tr>
                  ) : (
                    logs.map((log, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100`}>
                        <td className="px-4 py-3 text-sm text-slate-700">{formatDate(log.timestamp)}</td>
                        <td className="px-4 py-3 text-sm font-medium text-slate-800">{log.username}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{log.ipAddress}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            log.success 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {log.success ? 'Success' : 'Failed'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-700">{log.message || '-'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}