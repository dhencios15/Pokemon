import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';

import PokemonLogo from 'assets/images/pokemon_logo.png';

const Layout = ({ children }) => (
  <div className='container py-4 mx-auto'>
    <header className='grid space-y-4 place-items-center'>
      <NavLink
        to='/'
        className='text-4xl font-bold tracking-widest text-center text-yellow-custom drop-shadow-xl'
      >
        {/* PoK<span className='text-hot-pink'>é</span>MoN */}
        <img className='h-20' src={PokemonLogo} alt='pokemon_logo' />
      </NavLink>
      <Navbar />
    </header>
    {children}
  </div>
);

export default Layout;
