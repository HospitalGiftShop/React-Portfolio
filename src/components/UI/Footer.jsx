import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const Footer = () => {
    const [linkedinIconColor, setLinkedinIconColor] = useState('white');
    const [githubIconColor, setGithubIconColor] = useState('white');
    const [emailIconColor, setEmailIconColor] = useState('white');

    return (
        <div className="bg-primary p-3 d-flex justify-content-center gap-5 ">
            <a
                className="bi bi-linkedin fs-4"
                style={{ color: linkedinIconColor }}
                onMouseEnter={() => setLinkedinIconColor('black')}
                onMouseLeave={() => setLinkedinIconColor('white')}
                href="https://www.linkedin.com/in/tarameans/"
                onClick={() => {
                    console.log("Navigating to LinkedIn");
                }}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>

            <a
                href="https://github.com/HospitalGiftShop"
                onClick={() => {
                    console.log("Navigating to GitHub");
                }}
                className="bi bi-github fs-4"
                style={{ color: githubIconColor }}
                onMouseEnter={() => setGithubIconColor('black')}
                onMouseLeave={() => setGithubIconColor('white')}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>

            <a
                href="mailto:tmeans01@gmail.com"
                onClick={() => {
                    console.log("Opening email client");
                }}
                className="bi bi-envelope fs-4"
                style={{ color: emailIconColor }}
                onMouseEnter={() => setEmailIconColor('black')}
                onMouseLeave={() => setEmailIconColor('white')}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>
        </div>
    );
};

export default Footer;
