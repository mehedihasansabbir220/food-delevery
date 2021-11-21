import './App.css';
import AuthProvider from './contex/AuthProvider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Update from './Pages/Update/Update';
import PrivateRoute from './contex/PrivateRoute/PrivateRoute';
import AddProducts from './Pages/AddProducts/AddProducts';
import About from './Pages/About/About';
import MyOrder from './Pages/MyOrder/MyOrder';
import BuyNow from './Component/BuyNow/BuyNow';
import AllOrders from './Pages/AllOrders/AllOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/allOrders'>
              <AllOrders />
            </Route>
            <Route exact path='/addProducts'>
              <AddProducts></AddProducts>
            </Route>
            <PrivateRoute exact path='/update/:productID'>
              <Update></Update>
            </PrivateRoute>
            <PrivateRoute exact path='/myOrders'>
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute exact path='/buynow/:id'>
              <BuyNow />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
