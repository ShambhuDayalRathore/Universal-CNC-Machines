import { Helmet } from "react-helmet";
function ProductDetails() {
    return (
        <>
            {/* ===== SEO ===== */}
            <Helmet>
                <title>Product Details | CNC Manufacturing Company</title>
                <meta
                    name="description"
                    content="Leading CNC manufacturing company delivering precision machines and industrial solutions."
                />
            </Helmet>

            {/* ===== Page Banner ===== */}
            <div className="about-banner text-white text-center">
                <h2 className="fw-bold">Product Details</h2>
                <p>Home › Product Details</p>
            </div>

            {/* ===== Product Details Section ===== */}
            <div className="container my-4">

                {/* ===== Breadcrumb & Title ===== */}
                <div className="mb-12">
                    <h3 className="fw-bold text-center">
                        TCP-V-1000 3 Axis VMC Drilling Machine
                    </h3>
                    <small className="text-muted">
                        Home › VMC Drilling Machine › TCP-V-1000
                    </small>
                </div>

                <div className="row">
                    {/* ===== Left Sidebar ===== */}
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-3">Our Products</h5>
                        <ul className="list-group">
                            <li className="list-group-item">CNC Lathe Machine</li>
                            <li className="list-group-item">CNC Turning Machine</li>
                            <li className="list-group-item active">VMC Drilling Machine</li>
                            <li className="list-group-item">CNC Roll Turning Lathe</li>
                            <li className="list-group-item">Conventional Lathe</li>
                        </ul>
                    </div>

                    {/* ===== Product Image ===== */}
                    <div className="col-md-5 text-center">
                        <img
                            src="https://picsum.photos/500/350?vmc"
                            alt="VMC Machine"
                            className="img-fluid border p-2"
                        />
                    </div>

                    {/* ===== Quick Inquiry Form ===== */}
                    <div className="col-md-4">
                        <div className="card shadow p-3">
                            <h5 className="fw-bold mb-3">Quick Inquiry</h5>

                            <input className="form-control mb-2" placeholder="Your Name" />
                            <input className="form-control mb-2" placeholder="Email" />
                            <input className="form-control mb-2" placeholder="Phone" />
                            <textarea
                                className="form-control mb-3"
                                placeholder="Your Requirement"
                                rows="3"
                            ></textarea>

                            <button className="btn btn-dark w-100">
                                Send Inquiry
                            </button>
                        </div>
                    </div>
                </div>

                {/* ===== Technical Specifications ===== */}
                <div className="mt-5">
                    <h4 className="fw-bold mb-3">Technical Specifications:</h4>

                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Max. Accommodate Diameter</th>
                                <td>1000 mm</td>
                            </tr>
                            <tr>
                                <th>Maximum Drilling Capacity</th>
                                <td>55 mm</td>
                            </tr>
                            <tr>
                                <th>Width of Base</th>
                                <td>600 mm</td>
                            </tr>
                            <tr>
                                <th>X-Travel</th>
                                <td>1000 ± 25 mm</td>
                            </tr>
                            <tr>
                                <th>Y-Travel</th>
                                <td>1000 ± 25 mm</td>
                            </tr>
                            <tr>
                                <th>Z-Travel</th>
                                <td>400 mm</td>
                            </tr>
                            <tr>
                                <th>Controller</th>
                                <td>Siemens / Mitsubishi</td>
                            </tr>
                            <tr>
                                <th>Maximum RPM</th>
                                <td>1500 RPM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default ProductDetails;
