import React from 'react';
import './ContactStyles';
import { ContactInfo, FormContainer } from './ContactStyles';
import { FiPhone } from '@react-icons/all-files/fi/FiPhone'

const ContactForm = () => {
    return (
        <FormContainer data-scroll-section >
            <ContactInfo>
                <div data-scroll data-scroll-speed="1.5">
                    <h1>Have any idea? <span> Drop a message, </span>
                        i'd like to <span>hear from you</span>
                    </h1>
                    <div className="form_items">
                        <form action="#">
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Email" />
                            <input type="phone" placeholder="Phone no" />
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                            <br />
                            <button>SEND</button>
                        </form>
                        <h3><FiPhone /> 6901360467 </h3>
                    </div>

                </div>
            </ContactInfo>
        </FormContainer>
    )
}

export default ContactForm
