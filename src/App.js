import Header from '../src/shared/Header';
import Footer from '../src/shared/Footer';
import { Outlet } from 'react-router-dom';


const App = ()=>{
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
