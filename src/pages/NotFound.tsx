import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: '#EAEFEF' }}
    >
      <div className="text-center">
        <h1 
          className="mb-4 text-4xl font-bold"
          style={{ color: '#FF9B51' }}
        >
          404
        </h1>
        <p 
          className="mb-4 text-xl"
          style={{ color: '#BFC9D1' }}
        >
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="underline hover:opacity-80 transition-opacity"
          style={{ color: '#FF9B51' }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;