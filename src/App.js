import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner"
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div className="bg-dark p-5">
          <div className="container">
            <Routes>
              <Route path="/React-Repository-Documentation" element={<Home/>}></Route>
              <Route path="/React-Repository-Documentation/SinglePage" element={<SinglePage/>}></Route>
            </Routes>
            
          </div>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App