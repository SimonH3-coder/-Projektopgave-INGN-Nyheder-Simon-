import { NavLink } from "react-router";
import user from '../../assets/user.png'
import bars from '../../assets/bars.png'

export function Navbar() {
const linkClassName = ({ isActive }) => (isActive ? ' font-Roboto' : 'text-[#000000] font-Roboto');
    return (
        <nav className="flex flex-row font-['Roboto']">
            <h1 className="absolute top-8 left-20 p-8  text-[#C52525] font-Roboto">INGN</h1>
            <div>
                <NavLink to="/" className="p-4 m-4" className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/indland" className={linkClassName}>|Indland|</NavLink>
                <NavLink to="/udland" className={linkClassName}>|Udland|</NavLink>
                <NavLink to="/teknologi" className={linkClassName}>Teknologi</NavLink>
                <NavLink to="/sport" className={linkClassName}>|Sport|</NavLink>
                <NavLink to="/politik" className={linkClassName}>|Politik|</NavLink>
                <NavLink to="/samfund" className={linkClassName}>|Samfund|</NavLink>
            </div>
            <img className="w-[1.7975rem] h-[2.054375rem] top-[1.44rem] left-[82.875rem]" src={user} alt="user information" />
            <img className="w-[1.7975rem] h-[1.573125rem] top-[1.695625rem] left-[85.8275rem]" src={bars} alt="menu" />
        </nav> 
    )
}