import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from "prop-types";

function Footer({ items, pageLinks, onSelectItem }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
        <>
            {items.length === 0 && <p>No social media accounts found.</p>}
            <ul className="list-group list-group-horizontal bg-primary p-3 d-flex justify-content-center gap-5">
                {items.map((item, index) => (
                    <a
                        href={pageLinks[index]}
                        className={
                            `${item} fs-4`
                        }
                        style={{ color: hoveredIndex === index ? 'black' : 'white' }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                        key={item}
                        onClick={() => {
                            onSelectItem(item);
                        }}
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security best practice
                        role="button"
                    >
                    </a>
                ))}
            </ul >
        </>
    );
}

Footer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    pageLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelectItem: PropTypes.func.isRequired,
};

export default Footer;
