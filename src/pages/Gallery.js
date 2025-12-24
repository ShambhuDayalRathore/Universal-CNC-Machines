import { Helmet } from "react-helmet";
function Gallery() {
    const machines = [
        {
            title: "CNC Lathe",
            subtitle: "Machine",
            image: "https://picsum.photos/400/300?1",
        },
        {
            title: "CNC Turning",
            subtitle: "Machines",
            image: "https://picsum.photos/400/300?2",
        },
        {
            title: "VMC Drilling",
            subtitle: "Machine",
            image: "https://picsum.photos/400/300?3",
        },
        {
            title: "CNC Lathe",
            subtitle: "Machine",
            image: "https://picsum.photos/400/300?4",
        },
        {
            title: "CNC Turning",
            subtitle: "Machines",
            image: "https://picsum.photos/400/300?5",
        },
        {
            title: "VMC Drilling",
            subtitle: "Machine",
            image: "https://picsum.photos/400/300?6",
        },
    ];

    return (
        <>
            {/* ===== SEO ===== */}
            <Helmet>
                <title>Gallery | CNC Manufacturing Company</title>
                <meta
                    name="description"
                    content="Leading CNC manufacturing company delivering precision machines and industrial solutions."
                />
            </Helmet>

            {/* ===== Page Banner ===== */}
            <div className="about-banner text-white text-center">
                <h2 className="fw-bold">Gallery</h2>
                <p>Home › Gallery</p>
            </div>

            {/* ===== Gallery Section ===== */}
            <div className="container my-5">
                <h2 className="text-center mb-5 fw-bold">Our Machines</h2>

                <div className="row">
                    {machines.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card gallery-card h-100 text-center shadow">
                                <div className="card-body">
                                    <h3 className="fw-bold">{item.title}</h3>
                                    <p className="text-muted">{item.subtitle}</p>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="img-fluid my-4"
                                    />

                                    <a href="/product-details" className="quick-inquiry">
                                        Quick Inquiry →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Gallery;
