import { NavLink } from "react-router-dom"


const NavLogo = () => {
    return (
        <NavLink to='/' style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className="logo" style={{ width: "60px", height: "45px", padding: "0", cursor: "pointer" }}>
            <img src="/images/logo2.jpeg" style={{ width: "100%", height: "100%" }} alt="" />
        </div>
        </NavLink>

    )
}

export default NavLogo