import React from 'react';
import './NavStyles'
import { NavContainer, NavItem, SocialLogos } from './NavStyles';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { VscGithub } from '@react-icons/all-files/vsc/VscGithub'
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <NavContainer>
            <NavItem>
                <li>
                    <Link to='/'>
                        Logo
                    </Link>
                </li>
                <SocialLogos>
                    <li>
                        <a href="">
                            <AiOutlineLinkedin className="social_icons" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <VscGithub className="social_icons" />
                        </a>
                    </li>
                </SocialLogos>
            </NavItem>
        </NavContainer>
    )
}

export default Navbar
