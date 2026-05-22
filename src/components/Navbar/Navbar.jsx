// Lavet med hjælp fra cotpilot lidt styling
import { useState } from "react";
import { NavLink } from "react-router";
import user from '../../assets/user.png'
import bars from '../../assets/bars.png'

export function Navbar() {
    const [NavbarOpen, setNavbarOpen] = useState(false);
   
    const linkClassName = ({ isActive }) =>
    [
        "relative px-2 py-2 text-sm font-medium transition-colors duration-200",
        "text-[#202020] hover:text-[#C52525]",
        isActive ? "text-[#C52525] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#C52525]":"", 
    ] .join(" ")
    
    return (
        <header className=" font-(family-name:--font-roboto-flex) w-full border-b border-[#e6e6e6] bg-white">
            
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
                <h1 className="font-Roboto-Flex text-3xl font-extrabold tracking-tight text-[#C52525]">INGN</h1>
                <nav className="hidden md:flex items-center gap-6 md:flex">
                <NavLink to="/" className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/indland" className={linkClassName}>|Indland|</NavLink>
                <NavLink to="/udland" className={linkClassName}>|Udland|</NavLink>
                <NavLink to="/teknologi" className={linkClassName}>|Teknologi|</NavLink>
                <NavLink to="/sport" className={linkClassName}>|Sport|</NavLink>
                <NavLink to="/politik" className={linkClassName}>|Politik|</NavLink>
                <NavLink to="/samfund" className={linkClassName}>|Samfund|</NavLink>
            </nav>
            <div className="flex items-center gap-4">
            <button className="rounded-full p-1 transition hover:bg-neutral-100">
             <img className="h-6 w-6" src={user} alt="user information" />   
            </button>
            <button onClick={() => setNavbarOpen((v) => !v)}
            aria-expanded={NavbarOpen}
            aria-controls="mobile-menu"
            >
              <img className="h-6 w-6" src={bars} alt="menu" />  
            </button>
            </div>
            </div>

            <div id="mobile-menu" className={`md:hidden border-t border-[#f0f0f0] bg-white transition-max-h duration-250 overflow-hidden ${NavbarOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="mx-auto flex max-w-7xl gap-3 px-4 py-3 sm:px-6">
                <NavLink to="/" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Alle|</NavLink>
                <NavLink to="/indland" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Indland|</NavLink>
                <NavLink to="/udland" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Udland|</NavLink>
                <NavLink to="/teknologi" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Teknologi|</NavLink>
                <NavLink to="/sport" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Sport|</NavLink>
                <NavLink to="/politik" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Politik|</NavLink>
                <NavLink to="/samfund" onClick={() => setNavbarOpen(false)} className={linkClassName}>|Samfund|</NavLink>
            </div>
            </div>
            
        
        </header>
    )
}
