  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';

  const withAuth = (Component) => {
    return (props) => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const navigate = useNavigate();

      useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            navigate('/auth'); // Redirect to the AuthPage
          }
        });

        return () => unsubscribe();
      }, [navigate]);

      return isAuthenticated ? <Component {...props} /> : null;
    };
  };

  export default withAuth;
