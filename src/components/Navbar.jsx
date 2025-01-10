import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-2 text-xl bg-black text-white shadow-lg'>
      <div className='flex gap-4 items-center'>
        <img src={logo} className='w-20' />
      </div>
      <div>
        <ul className='flex gap-6'>
          <li className='hover:scale-125 duration-300'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='hover:scale-125 duration-300'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='hover:scale-125 duration-300'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex gap-4'>
        <input type="text" className='rounded-xl px-2 py-1' />
        <button className='border border-white'>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
