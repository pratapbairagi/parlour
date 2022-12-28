import "./header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import SubNav from "../atoms/subNav";
import SearchBar from "../atoms/search_bar";
import ToggleBtn from "../atoms/toggleBtn";
import NavLogo from "../atoms/NavLogo";
import ToggleCancelBtn from "../atoms/toggleCancelBtn";
import MidNavLogo from "../atoms/midNavLogo";
import { useState } from "react";
// import logo from "./lo"

const Header = () => {

    let [toggle, setToggle] = useState("none")

    $(function () {
        $(".handBurger").on("click", function () {
            $(".mid_nav_container").addClass("activeNav")

        })


        $(".handBurgerClose").on("click", function () {
            $(".mid_nav_container").removeClass("activeNav")
        })
        
        $(".navlink").on("click", function(e){

            if(e.currentTarget.lastChild.textContent=="Sections"){
                return toggle == "none" ? setToggle("flex") : setToggle("none")
            }
            else{
                return setToggle("none")
            }
             
        })
    })

    return (
        <div className="container-fluid p-0">
            <nav className="navbar_container row px-2">
                <div className="left_nav col col-12 d-flex justify-content-between">
                    <NavLogo/>
                    <div className="search_handBurger_container d-flex justify-content-end gap-2 align-items-center">
                        <SearchBar/>
                        <ToggleBtn/>
                    </div>
                </div>

                <ul className="mid_nav_container
                position-fixed
                col" >
                    <ToggleCancelBtn/>

                    <div className="mid_nav">
                        <MidNavLogo/>

                        <NavLink className={`d-flex flex-column justify-content-center align-items-center navlink`} to='/home'>
                            <svg className="bi bi-house-door-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                            </svg>
                            <li className="px-1 py-1 d-none d-md-flex d-lg-flex d-xl-flex">Home</li>
                        </NavLink>

                        <NavLink className={`d-flex flex-column justify-content-center align-items-center navlink`} to='/section'>
                            <svg className="bi bi-ui-checks d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <li className="px-1 py-1 d-none d-md-flex d-lg-flex d-xl-flex">Sections</li>
                        </NavLink>
                            <SubNav subNavToggleData={toggle} />

                        <NavLink className={`d-flex flex-column justify-content-center align-items-center navlink`} to='/about'>
                            <svg className="bi bi-exclamation-diamond-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <li className="px-1 py-1 d-none d-md-flex d-lg-flex d-xl-flex">About</li>
                        </NavLink>


                        <NavLink className={`d-flex flex-column justify-content-center align-items-center navlink`} to='/contact'>
                            <svg className="bi bi-person-lines-fill d-block d-sm-block d-md-none d-lg-none d-xl-none d-xl-block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>
                            <li className="px-1 py-1 d-none d-md-flex d-lg-flex d-xl-flex">Contact</li>
                        </NavLink>
                    </div>
                </ul>

            </nav>
        </div>
    )
}

export default Header