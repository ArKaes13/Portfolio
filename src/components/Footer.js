import React from 'react';

function Footer() {

    function copyright() {
        const currentYear = new Date().getFullYear();
        return (
            `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class="fa-brands fa-github"></a></i>`
        );
    };

    return (
        <footer>
            <div>
                <p dangerouslySetInnerHTML={{ __html: copyright() }}></p>
            </div>
        </footer>
    );
};

export default Footer;