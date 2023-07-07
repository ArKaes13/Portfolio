import React from 'react';
import SectionHeader from './SectionHeader';

function Contact() {
    return (
        <section id='contact'>
            <SectionHeader sectionName='Contact' />
            <div className='contactContainer'>
                <form action='https://formsubmit.co/43d40085d6f508f91f96ff2f044654ad' method='post'>
                    <input type='text' name='name' required placeholder='Name' maxLength={40}></input>
                    <input type='email' name='email' required placeholder='Email' maxLength={256} pattern='^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$'></input>
                    <textarea name='message' required placeholder='Message' maxLength={300}></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button value='send'>Send</button>
                </form>
            </div>
        </section> 
    );
};

export default Contact;