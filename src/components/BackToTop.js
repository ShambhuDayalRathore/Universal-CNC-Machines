import { useEffect, useState } from "react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300); // show after 300px scroll
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {visible && (
                <button onClick={scrollToTop} className="back-to-top" title="Back to top">
                    ↑
                </button>
            )}
        </>
    );
}

export default BackToTop;
