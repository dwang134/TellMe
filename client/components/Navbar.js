import Link from 'next/link'

const Navbar = () => {
  return (
    <header className= 'flex justify-center justify-between border-b-4 p-6 border-stone-400'>
    <div className= 'hover:text-slate-400'>
      <Link href= '/'><a>TM</a></Link>
    </div>
    <ul className= 'flex justify-center gap-x-6'>
    <li className= 'hover:text-slate-400'>
    <Link href= '/login'><a>Login</a></Link>
    </li>
    <li className= 'hover:text-slate-400'>
    <Link href= '/register'><a>Register</a></Link>  
    </li>
    </ul>
    </header>
  )
}

export default Navbar