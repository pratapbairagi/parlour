import About from "../pages/about/about";
import Home from "../pages/home/home";
import Sections from "../pages/sections/sections";


const Layout = ({search}) =>{
    return(
        <>
            {/* <Header/> */}
            <Home/>
            <Sections search={search}/>
            <About/>
        </>
    )
}

export default Layout