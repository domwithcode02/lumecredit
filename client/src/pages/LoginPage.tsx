import { useEffect } from "react";
import lumeLogo from "@assets/lume_credit_transparent_optimized.png";

export default function LoginPage() {
  // Handle Replit login
  const handleLogin = () => {
    window.location.href = "/api/login";
  };
  
  // Check URL params for error messages
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error")) {
      console.error("Login error:", params.get("error"));
    }
  }, []);
  
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <img 
          src={lumeLogo} 
          alt="LumeCredit Logo" 
          style={{ 
            height: '80px', 
            marginBottom: '20px',
            maxWidth: '100%'
          }} 
        />
        
        <h1 style={{ 
          fontWeight: 'bold', 
          fontSize: '1.75rem', 
          marginBottom: '10px',
          color: '#1a1a1a' 
        }}>
          LumeCredit Login
        </h1>
        
        <p style={{ 
          marginBottom: '25px',
          color: '#666' 
        }}>
          Sign in with your Replit account to access the dashboard
        </p>
        
        <button 
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#F5C518',
            color: '#003366',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5b616'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F5C518'}
        >
          Sign in with Replit
        </button>
      </div>
    </div>
  );
}