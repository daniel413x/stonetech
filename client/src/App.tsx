import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  indexPublicRoutes,
} from './utils/consts';
import Context from './context/context';
import AppRouter from './components/routers/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { autoAuth } from './http/employeeAPI';
import Footer from './components/Footer/Footer';
import ScrollWrapper from './components/ScrollWrapper';

function App() {
  const {
    employee,
  } = useContext(Context);
  const [loading, setLoading] = useState<boolean>(true);
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
      }
    })();
  }, []);
  return loading ? null : (
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
