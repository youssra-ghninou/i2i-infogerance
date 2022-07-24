import Logo from '../images/logo.jpg'
import { AiOutlineMenuFold } from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div className="w-1/12">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navigation hidden md:block">
                navig
            </div>
            <div className="quote hidden md:block">
                quote
            </div>
            <button className="menu md:hidden">
                 <AiOutlineMenuFold />
            </button>
        </nav>
    );
}
 
export default Navbar;