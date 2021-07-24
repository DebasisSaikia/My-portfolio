import React from 'react';
import './footerStyles'
import { CopyRights, FooterContainer, FooterItems, SocialLinks } from './footerStyles';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { VscGithub } from '@react-icons/all-files/vsc/VscGithub'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { ImPinterest2 } from '@react-icons/all-files/im/ImPinterest2'

const Footer = () => {

    return (
        <FooterContainer data-scroll-section>
            <FooterItems>
                <h1>Drop me a line -</h1>
                <div className="divider" />
                <h2>debasishsaikia136<span>@gmail.com</span></h2>
                <SocialLinks>
                    <p>Connect with me</p>
                    <div className="logo_container">
                        <AiOutlineLinkedin />
                        <VscGithub />
                        <FiInstagram />
                        <ImPinterest2 />
                    </div>
                </SocialLinks>
                <div className="divider" />

                <CopyRights>
                    <p>Website by <span>Debasis Saikia</span></p>
                    <h5> &copy;  2021 </h5>
                </CopyRights>
            </FooterItems>
        </FooterContainer>
    )
}

export default Footer

