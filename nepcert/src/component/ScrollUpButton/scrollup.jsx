import { useEffect, useState } from "react";
import './scrollup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollUp () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => { 
        if (window.pageYOffset > 1200) {
            setIsVisible(true); 
        } else {
            setIsVisible(false);
        }
    };

    useEffect (() => {
        window.addEventListener('scroll', toggleVisibility);
        return() => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-button">
            { isVisible && ( 
                <button onClick={scrollToTop} className="Scroll-up">
                    <FontAwesomeIcon icon={ FaArrowUp } />
                </button>
            )}
        </div>
    );
};

export default ScrollUp;