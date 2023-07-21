import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as  Router, Routes,  Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
import AdminHome from './admin/AdminHome';
import Customers from './admin/Customers';
import UpdateCustomer from './admin/UpdateCustomer';
import Mechanics from './admin/Mechanics';
import CustomerHome from './customer/CustomerHome';
import MechanicHome from './mechanic/MechanicHome';
import AllMechanics from './customer/AllMechanics';
import Profile from './mechanic/Profile';
import Responses from './customer/Responses';
import Requests from './mechanic/Requests';
import Payment from './customer/Payment';
import AddReview from './customer/AddReview';
import Orders from './customer/Orders';
import Reviews from './mechanic/Reviews';
import History from './mechanic/History';
import AdminRequests from './admin/AdminRequests';
import PaymentHistory from './admin/PaymentHistory';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminhome' element={<AdminHome/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/updatecustomer/:id' element={<UpdateCustomer/>}/>
          <Route path='/mechanics' element={<Mechanics/>}/>
          <Route path='/customerhome' element={<CustomerHome/>}/>
          <Route path='/mechanichome' element={<MechanicHome/>}/>
          <Route path='/allmechanics' element={<AllMechanics/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/responses' element={<Responses/>}/>
          <Route path='/requests' element={<Requests/>}/>
          <Route path='/payment/:email' element={<Payment/>}/>
          <Route path='/addreview/:email' element={<AddReview/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/adminrequests' element={<AdminRequests/>}/>
          <Route path='/paymenthistory' element={<PaymentHistory/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
