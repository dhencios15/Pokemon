import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className='container py-4 mx-auto'>
    <header className='grid space-y-4 place-items-center'>
      <NavLink
        to='/'
        className='text-4xl font-bold tracking-widest text-center text-yellow-custom drop-shadow-xl'
      >
        PoK<span className='text-hot-pink'>é</span>MoN
      </NavLink>
      <Navbar />
    </header>
    {children}
  </div>
);

export default Layout;
