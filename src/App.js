import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OrderReview from './components/Order-Review/OrderReview';
import About from './components/About/About';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order">
           <OrderReview></OrderReview>
          </PrivateRoute>
          <Route path="/about">
           <About></About>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
