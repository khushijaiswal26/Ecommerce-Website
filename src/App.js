import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals.jsx';
import PaydaySale from './components/PaydaySale.jsx';
import YoungsFavorite from './components/YoungsFavorite.jsx';
import AppDownload from './components/AppDownload.jsx';
import Community from './components/Community.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
     
      <main>
        <HeroSection/>
        <NewArrivals />
        <PaydaySale />
        <YoungsFavorite />
        <AppDownload />
        <Community />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
