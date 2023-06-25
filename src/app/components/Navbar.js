'use client'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';



const Navbar = () => {
    const handlenav=()=>{
        document.querySelector('.main-nav').style.display="none"
    }
   

  
  return (
    <>
      <div className='main-nav'>
        <div>
            <div className='nav-hide'>
                <button onClick={handlenav}><AiOutlineClose/></button>
            </div>
          <nav >
              <ul className='nav-list'>
                <li className='nav-link'>
                  <Link href="/">Home</Link>
                </li>
                <li className='nav-link'>
                  <Link href="/">Search</Link>
                  
                </li>
                <li className='nav-link'>
                  <Link href="/">Posts</Link>
                </li>
                <li className='nav-link'>
                  <Link href="/">Live</Link>
                </li>
              </ul>
            </nav>
        </div>
        <div>
            <ul className='nav-list'>
                <li className='nav-link'>
                    <Link href="/">Login</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
