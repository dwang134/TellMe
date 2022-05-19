import Link from 'next/link'
import {RiLoginBoxLine} from 'react-icons/ri'
import {FaUser} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className= 'flex justify-center justify-between border-b-2 p-6 border-sm border-slate-200'>
    <div className= 'hover:text-slate-400'>
      <Link href= '/'><a className= 'text-lg font-semibold'>TM</a></Link>
    </div>
    <ul className= 'flex justify-center gap-x-6'>
    <li className= 'hover:text-slate-400'>
    <Link href= '/login'><a className= 'flex items-center justify-center gap-x-1 roboto font-semibold text-lg'><RiLoginBoxLine/>Login</a></Link>
    </li>
    <li className= 'hover:text-slate-400'>
    <Link href= '/register'><a className= 'flex items-center justify-center gap-x-1 roboto font-semibold text-lg'><FaUser/>Register</a></Link>  
    </li>
    </ul>
    </header>
  )
}

export default Navbar