import { Link } from 'react-router-dom'
import Container from '../Container'
// import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img
                className=' md:block rounded-lg'
                src='https://i.ibb.co/j4nhY54/426808558-1344613336232416-3502086777907930776-n.jpg'
                alt='logo'
                width='200'
                height='100'
              />
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
