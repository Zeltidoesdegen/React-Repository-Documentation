import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner"
import image1 from "./img/1.jpg"
import image2 from "./img/2.png"
import image3 from "./img/3.png"
import image4 from "./img/4.jpg"
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <div className="bg-dark p-5">
        <div className="container">
          <h1 className="text-warning">Top 5 Heroes of the week</h1>
          <div className="row">
            <GridItems name="Viper Ning" imgFile={image1} desc="Lorem Ipsum"></GridItems>
            <GridItems name="Wuchen" imgFile={image2} desc="Lorem Ipsum"></GridItems>
            <GridItems name="Yueshan" imgFile={image3} desc="Lorem Ipsum"></GridItems>
            <GridItems name="Kurumi" imgFile={image4} desc="Lorem Ipsum"></GridItems>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App