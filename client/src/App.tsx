import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './context/context';
import AppRouter from './components/routers/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { autoAuth } from './http/employeeAPI';
import Footer from './components/Footer/Footer';
import ScrollWrapper from './components/ScrollWrapper';
import LoadingScreen from './components/LoadingScreen';
import { indexPublicRoutes } from './paths/paths';

function App() {
  const {
    employee,
  } = useContext(Context);
  const [loading, setLoading] = useState<boolean>(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const registeredToken = localStorage.getItem('registeredToken');
        if (registeredToken) {
          const stillAuthed = await autoAuth();
          employee.set(stillAuthed);
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          localStorage.removeItem('registeredToken');
        }
      } finally {
        setLoading(false);
        setTimeout(() => setShowLoadingScreen(false), 1000);
      }
    })();
  }, []);
  return showLoadingScreen ? (
    <LoadingScreen
      loading={loading}
    />
  ) : (
    <Router>
      <ScrollWrapper>
        <Navbar />
        <div id="main-routes-content">
          <AppRouter
            publicRoutes={indexPublicRoutes}
          />
        </div>
        <Footer />
      </ScrollWrapper>
    </Router>
  );
}

export default App;
