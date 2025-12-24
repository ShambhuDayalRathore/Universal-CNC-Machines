import { Helmet } from "react-helmet";
import Slider from "../components/Slider";

function Home() {
    return (
        <>
            <Helmet>
                <title>My Website | React & Node</title>
                <meta name="description" content="Professional React website with Node backend" />
                <meta name="keywords" content="React, Node, Website, Portfolio" />
            </Helmet>
            <div className="page">
                <Slider />
                <h1>Welcome to Our Website</h1>
                <p>This is the home page built using React.js</p>
            </div>
        </>
    );
}

export default Home;
