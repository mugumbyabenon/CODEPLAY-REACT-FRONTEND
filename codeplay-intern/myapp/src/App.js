import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OurServices from './components/OurServices';
import Header from './components/header';

function App() {
  return (
    <div  style={{ margin: 0, padding: 0 }} >
    <Header  style={{ margin: 0, padding: 0 }}  />
    <diV id="home"  style={{ margin: 0, padding: 0 }} >
    <Welcome  style={{ margin: 0, padding: 0 }} /></diV>
    <div id='services'> <OurServices /></div>
   <div id="about"><AboutUs /></div>
    <div id='contact'><ContactUs /></div>
    </div>
  );
}

export default App;
