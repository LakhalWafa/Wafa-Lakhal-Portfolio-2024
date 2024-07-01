import logo from '../assets/WafaLakhalLogo.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/wafa-lakhal-242a6512a/" target='_blank'><FaLinkedin /></a> 
        <a href="https://github.com/LakhalWafa" target='_blank'>  <FaGithub /></a> 
        </div>
    </nav>
  )
}

export default Navbar