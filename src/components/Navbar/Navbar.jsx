import { NavLink } from "react-router";
import user from '../../assets/user.png'
import bars from '../../assets/bars.png'

export function Navbar() {
const linkClassName = ({ isActive }) =>
    [
        "relative px-2 py-2 text-sm font-medium transition-colors duration-200",
        "text-[#202020] hover:text-[#C52525]",
        isActive ? "text-[#C52525] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#C52525]":"", 
    ] .join(" ")
    
    return (
        <nav className="w-full border-b border-[#e6e6e6] bg-white">
            
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-[#C52525]">INGN</h1>
                <div className="hidden items-center gap-4 md:flex">
                <NavLink to="/" className="p-4 m-4" className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/indland" className={linkClassName}>|Indland|</NavLink>
                <NavLink to="/udland" className={linkClassName}>|Udland|</NavLink>
                <NavLink to="/teknologi" className={linkClassName}>|Teknologi|</NavLink>
                <NavLink to="/sport" className={linkClassName}>|Sport|</NavLink>
                <NavLink to="/politik" className={linkClassName}>|Politik|</NavLink>
                <NavLink to="/samfund" className={linkClassName}>|Samfund|</NavLink>
            </div>
            <div className="flex items-center gap-4">
            <button className="rounded-full p-1 transition hover:bg-neutral-100">
             <img className="h-6 w-6" src={user} alt="user information" />   
            </button>
            <button className="roundend-full p-1 transition hover:bg-neutral-100 md:hidden">
              <img className="h-6 w-6" src={bars} alt="menu" />  
            </button>
            </div>
            </div>

            <div className="flex justify-center gap-3 border-t border-[#f0f0f0] px-4 py-2 text-sm md:hidden">
                <NavLink to="/" className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/indland" className={linkClassName}>|Indland|</NavLink>
            </div>
            
        </nav> 
    )
}
