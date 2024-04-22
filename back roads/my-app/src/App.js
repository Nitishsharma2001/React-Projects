// import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Main from './main';
import About from './about';
import OurServices from './Ourservices';
import Tours from './tours.jsx';
import Footer from './footer.jsx';
function App() {
  return (
    <>
      <div className='project'>
        <Nav />
        <Main />
        <About />
        <OurServices />
        <Tours />
        <div className='rfooter'>
          <Footer />
        </div>
        <p className='parafooter'>Copyright © Backroads Travel Tours Company 2024 All Rights Reserved</p>
      </div>
    </>
  );
}

export default App;
