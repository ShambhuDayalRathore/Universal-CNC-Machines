import Slider from "../components/Slider";
import Seo from "../components/Seo";

function Home() {
    return (
        <>
            <Seo />
            <div className="page">
                <Slider />
                <h1>Welcome to Our Website</h1>
                <p>This is the home page built using React.js</p>
            </div>
        </>
    );
}

export default Home;
