import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/context'
import NavDrop from '../extra/NavDrop'
import { Badge } from 'antd';
import { Fade } from 'react-awesome-reveal'
import SeearchInput from './SeearchInput';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CgList } from 'react-icons/cg';
import { BiUser ,BiHomeAlt } from 'react-icons/bi';
import { TbInfoSquareRounded } from "react-icons/tb";
import { CgLogIn ,CgShoppingCart } from "react-icons/cg";

const NavBar = () => {

    const cartProduct = useSelector((state) => state.cartProduct.CartItem)
    const [user] = useUser();
    const [isNav, setIsNav] = useState("navHideM")
    const [colorChange, setColorchange] = useState(true);

    const handleNav = () => {
        isNav === "navHideM" ? setIsNav("navShowM") : setIsNav("navHideM");
    }

    const NavbarColor = () => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 100) {
                setColorchange(false);
            }
            else {
                setColorchange(true);
            }
        };
        window.addEventListener('scroll', changeNavbarColor);
    }

    useEffect(() => {
        NavbarColor()
    }, [])

    return (
        <header >
            <nav className={colorChange ? 'navShow' : 'navClean'}>
                <div className="navLogo"> Ecommerce 🛒 </div>

                <ul>
                    <SeearchInput />
                    <li> <Link to={"/"} > Home </Link> </li>
                    <li> <Link to={"/about"} > About </Link> </li>

                    {user?.userDetail ? <NavDrop /> : (<>
                        <li> <Link to={"/register"} > Sign Up </Link> </li>
                        <li> <Link to={"/login"} > Login </Link> </li>
                    </>)}
                    <li> <Link to={"/cart"} >
                        Cart {user?.token ? <Badge count={cartProduct?.length > 0 ? cartProduct?.length : 0} /> : <></>}
                    </Link> </li>

                </ul>
                <div className="navIcon">
                    <div className='hamNav' onClick={handleNav} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <MenuDiv className={isNav} >
                <div className="items container">
                    <Fade direction='down' cascade >
                        <ul>
                            <li> <Link to={"/"} > <BiHomeAlt/>  Home </Link> </li>

                            <li> <Link to={"/dashboard/user/profile"} className='specialA' >
                                <BiUser /> Profile
                            </Link> </li>

                            <li> <Link to={"/dashboard/user/orders"} className='specialA' >
                                <CgList /> Order
                            </Link> </li>

                            <li> <Link to={"/about"} > <TbInfoSquareRounded/> About </Link> </li>

                            {user?.userDetail ? <NavDrop /> : (<div className='liDiv'>
                                <li> <Link to={"/register"} > <CgLogIn/> Sign Up </Link> </li>
                                <li> <Link to={"/login"} > <CgLogIn/> Login </Link> </li>
                            </div>)}
                            <li> <Link to={"/cart"} > <CgShoppingCart/>
                                Cart {user?.token ? <Badge count={cartProduct?.length > 0 ? cartProduct?.length : 0} /> : <></>}
                            </Link> </li>


                        </ul>
                    </Fade>
                </div>
            </MenuDiv>

        </header >

    )
}

export default NavBar

const MenuDiv = styled.div`
    transition: all 200ms ease-in;
    backdrop-filter: blur(15px);

    .items{
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        ul{
            display: flex;
            gap: 5rem;
            flex-direction: column;
            

            li {
                a{
                    text-decoration: none;
                    color: white;
                    font-size: 2rem;

                    svg path{
                        color: white;
                    }
                }
            }
        }
    }
`