import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav>
            <h1 className="color-#C52525 font-Roboto">INGN</h1>
            <div>
                <NavLink to="/">|Alle|</NavLink>
                <NavLink>|Indland|</NavLink>

            </div>
        </nav>
    )
}