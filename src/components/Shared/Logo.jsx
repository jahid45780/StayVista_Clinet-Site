import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
        <img
          className=' md:block rounded-lg'
          src='https://i.ibb.co/j4nhY54/426808558-1344613336232416-3502086777907930776-n.jpg'
          alt='logo'
          width='200'
          height='100'
        />
      </Link>
    );
};

export default Logo;