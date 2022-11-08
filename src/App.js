import './App.css';
import Footer from './Pages/Footer';
import NavBar from './Pages/NavBar';
import SideBar from './Pages/SideBar';
import TextBody from './Pages/TextBody';

function App() {
  return (
    <div className="flexCol">
      <div className='flexRow'>
        <NavBar />
        </div>
        <div className='flexRow'>
      <TextBody />
      
      <SideBar />
      </div>
        <div className='flexRow'>
      <Footer />
      </div>
     
      
      
      
    </div>
  );
}

export default App;
