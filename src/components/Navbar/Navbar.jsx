import { NavLink } from "react-router";
import user from '../../assets/user.png'
import bars from '../../assets/bars.png'

export function Navbar() {
const linkClassName = ({ isActive }) => (isActive ? ' text-[#242424]  font-Roboto' : ' font-Roboto');
    return (
        <nav>
            <h1 className="text-[#C52525] font-Roboto">INGN</h1>
            <div>
                <NavLink to="/" className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/" className={linkClassName}>|Indland|</NavLink>
                <NavLink to="/" className={linkClassName}>|Udland|</NavLink>
                <NavLink to="/" className={linkClassName}>Teknologi</NavLink>
                <NavLink to="/" className={linkClassName}>|Sport|</NavLink>
                <NavLink to="/" className={linkClassName}>|Politik|</NavLink>
                <NavLink to="/" className={linkClassName}>|Samfund|</NavLink>
            </div>
            <img src={user} alt="user information" />
            <img src={bars} alt="menu" />
        </nav>
    )
}