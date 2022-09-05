import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* <Navbar aboutText="About Us" /> */}
      {/* <Navbar /> */}

      <div className="container my-3">
          {/* <About /> */}
      <TextForm heading="Enter The Text Here" />
      </div>
    </>
  );
}

export default App;
