import './App.css';
import Contact from './component/contact/Contact';
import Courses from './component/Courses/Courses';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <>
    <div style={{height:"2698px",position:"relative"}}>
      <Navbar/>
      <div className="twrapper">
        <Home/>
        <Courses/>
        <Contact/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
