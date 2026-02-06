import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />;

    // State
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const listenToScroll = () => {
        const heightToHidden = 250;
        const windowScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (windowScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    return (
        <>
            <section className="container">
                <footer className="footer">
                    <p>© 1999 Pro-Tech Plumbing Inc. | 25 Years of Trusted Service</p>
                </footer>
            </section>

            {/* Scroll To Top */}
            {isVisible && (
                <div className="scroll_top" onClick={scrollToTop}>
                    {faArrowUpIcon}
                </div>
            )}
        </>
    );
}
