import React, { useContext, useEffect, useRef, useState } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

function About() {
    const { theme } = useContext(ThemeContext);
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visibility to true when the image is in view
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the image is in view
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    // Inline styles for the scroll-triggered animation
    const transitionStyle = {
        transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
    };

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.topic }}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>
                        {aboutData.description1}
                        <br />
                        <br />
                        {aboutData.description2}
                    </p>
                </div>
                <div
                    className="about-img"
                    ref={imgRef} // Attach ref to the div
                    style={transitionStyle} // Apply the inline styles for animation
                >
                    <img
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
