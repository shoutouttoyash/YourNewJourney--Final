
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useNavigation } from 'react-router-dom';


import { ChakraProvider } from '@chakra-ui/react'
import AboutUs from './Components/AboutUs'
import Navigation from './Components/Navigation';
import Services from './Components/Services';
import Resume from './Components/Resume';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Appointment from './Components/Appointment';

// import Login from './Components/Login';
import Accomodation from './Components/Accomodation';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Cart from './Components/Cart';
import { currentItem } from './Components/StateManage';
import FurnitureService from './Components/FurnitureService';
import AccomodationInfo from './Components/AccomodationInfo';
import AirportPickup from './Components/AirportPickup';


import { ClerkProvider } from "@clerk/clerk-react";
import Signin from './Components/SignIn';
import Singnup from './Components/Singnup';
import Invalid from './Components/Invalid';
import BookingPage from './Components/BookingPage';
import PaymentForm from './Components/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }
// REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_ZWxlY3RyaWMtb3gtNzAuY2xlcmsuYWNjb3VudHMuZGV2JA

const clerkPubKey = "pk_test_ZWxlY3RyaWMtb3gtNzAuY2xlcmsuYWNjb3VudHMuZGV2JA"



function App() {
  const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY')


  const totalCartItems = useRecoilValue(currentItem);
  return (


    <ChakraProvider>
      <Elements stripe={stripePromise}>
        <Router>

        <ClerkProviderWithRoutes />

        </Router>


      </Elements>

    </ChakraProvider >



  )
}

export default App


function ClerkProviderWithRoutes() {
  return ( 
  <ClerkProvider
  publishableKey={clerkPubKey}
  navigate={(to) => navigate(to)}> 
  <Navigation />
  <Routes>

    <Route path='/About' Component={AboutUs} />
    <Route path='/Services' Component={Services} />
    <Route path='/Resume' Component={Resume} />
    <Route path='/ContactUs' Component={ContactUs} />
    <Route path='/Home' Component={Home} />
    <Route path="/Appointment" Component={Appointment} />
    <Route path='/Appointment/BookingPage' Component={BookingPage} />
    <Route path="/Signin" Component={Signin} />
    <Route path="/Signup" Component={Singnup} />

    <Route path="/Accomodation" Component={Accomodation} />
    <Route path="/Shop" Component={Cart} />
    <Route path="/Furniture" Component={FurnitureService} />
    <Route path='/Accomodation/moreinfo' Component={AccomodationInfo} />
    <Route path='/AirportPickup' Component={AirportPickup} />
    <Route path='/' Component={Home} />
    <Route path='/*' Component={Invalid} />
    <Route path="/payment" Component={PaymentForm} />

  </Routes>

  </ClerkProvider>
  )


}