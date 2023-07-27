import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';
import Context from './context/context';
import AppRouter from './components/routers/AppRouter';
import Navbar from './components/ui/navbar/Navbar';
import { autoAuth } from './http/employeeAPI';
import Footer from './components/ui/footer/Footer';
import ScrollWrapper from './components/ui/ScrollWrapper';
import LoadingScreen from './components/ui/LoadingScreen';
import { indexEmployeeRoutes, indexPublicRoutes } from './paths/paths';
import ErrorModal from './components/ui/ErrorModal';

Modal.setAppElement('#root');

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
            authedRoutes={indexEmployeeRoutes}
          />
        </div>
        <ErrorModal />
        <Footer />
      </ScrollWrapper>
    </Router>
  );
}

export default App;
