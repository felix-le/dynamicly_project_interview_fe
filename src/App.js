import { Suspense, useEffect } from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// Components
import NavBar from './components/commons/NavBar';
import Footer from './components/commons/Footer';
import routes from './container/routes';
// style
import './scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';

// actions

import { getExpenses } from './reduxState/actions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('🚀 ~ file: App.js ~ line 22 ~ App ~ state', state);

  useEffect(() => {
    dispatch(getExpenses(1, 0, 'amount'));
  }, []);

  return (
    <>
      <Suspense fallback={<div />}>
        <Router>
          <NavBar />
          <Route exact path='/' component={() => <Redirect to='/home' />} />
          <main>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  name={route.name}
                />
              ))}
              <Route path='*' component={() => '404 NOT FOUND'} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
