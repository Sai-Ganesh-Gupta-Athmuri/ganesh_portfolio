import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
      </div>
    </>
  );
}


export default App;
