import { useEffect, useState } from "react";

const images = [
    "https://picsum.photos/1000/400?1",
    "https://picsum.photos/1000/400?2",
    "https://picsum.photos/1000/400?3",
];

function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider">
            <img src={images[index]} alt="slider" />
        </div>
    );
}

export default Slider;
