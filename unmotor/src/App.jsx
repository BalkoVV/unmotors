import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PageOne from "./pages/PageOne/PageOne"; 
import PageTwo from './pages/PageTwo/PageTwo';
import PageThree from './pages/PageThree/PageThree';
import PageFour from './pages/PageFour/PageFour';
import PageMain from './pages/PageMain/PageMain';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <Routes>
               <Route exact path="/" element={<PageMain />} />
               <Route exact path="/pageone" element={<PageOne />} />
               <Route exact path="/pagetwo" element={<PageTwo />} />
               <Route exact path="/pagethree" element={<PageThree />} />
               <Route exact path="/pagefour" element={<PageFour />} />
            </Routes>
          <Footer/>  
      </div>
    </Router>
  );
}

export default App;
