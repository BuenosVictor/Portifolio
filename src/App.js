import './index.css';
import { Header } from './Header-component/Header.js'
import { Footer } from './Footer-component/Footer.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (

    


    <div className="App">

      <Header />
      <Outlet />
      <Footer />


    </div>
  );
}

export default App;
