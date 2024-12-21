import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const Footer = () => {
    return (
        <div className="bg-primary p-3 d-flex justify-content-center gap-3">
            <a
                href="https://www.linkedin.com/in/tarameans/"
                onClick={() => {
                    console.log("Navigating to LinkedIn");
                }}
                className="bi bi-linkedin text-white fs-4"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>

            <a
                href="https://github.com/HospitalGiftShop"
                onClick={() => {
                    console.log("Navigating to GitHub");
                }}
                className="bi bi-github text-white fs-4"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>

            <a
                href="mailto:tmeans01@gmail.com"
                onClick={() => {
                    console.log("Opening email client");
                }}
                className="bi bi-envelope text-white fs-4"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                role="button"
            ></a>
        </div>
    );
};

export default Footer;
