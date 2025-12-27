import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        message: "",
        fullName: "",
        companyName: "",
        mobile: "",
        email: "",
        city: "",
        country: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        alert("Inquiry Submitted!");
    };

    return (
        <>
            {/* ===== Page Banner ===== */}
            <div className="contact-banner text-white text-center py-4 mb-4">
                <h2 className="fw-bold">Contact Us</h2>
                <p>Home &gt; Contact Us</p>
            </div>

            <div className="container my-4">
                <div className="row">

                    {/* ===== LEFT: FORM ===== */}
                    <div className="col-md-6 mb-4">
                        <h4 className="fw-bold mb-3">Get In Touch With Us</h4>
                        <form onSubmit={submitForm}>
                            <textarea
                                className="form-control mb-3"
                                name="message"
                                placeholder="Message"
                                rows="3"
                                onChange={handleChange}
                            ></textarea>

                            <input className="form-control mb-3" type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
                            <input className="form-control mb-3" type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
                            <input className="form-control mb-3" type="text" name="mobile" placeholder="Mobile / WhatsApp Number" onChange={handleChange} />
                            <input className="form-control mb-3" type="email" name="email" placeholder="Business Email Address" onChange={handleChange} />

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input className="form-control" type="text" name="city" placeholder="City" onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input className="form-control" type="text" name="country" placeholder="Country" onChange={handleChange} />
                                </div>
                            </div>

                            <button className="btn btn-dark px-4">Submit</button>
                        </form>
                    </div>

                    {/* ===== RIGHT: CONTACT INFO ===== */}
                    <div className="col-md-6 mb-4">
                        <div className="contact-box text-white p-4 rounded">
                            <h4 className="fw-bold mb-3">Contact Info</h4>
                            <p>
                                Plot No. 15,16,17 Survey No.255,<br />
                                Reveira Industrial Estate, Near GEB Substation,<br />
                                Shapar (Veraval), Rajkot 360024
                            </p>

                            <p><b>Admin Support:</b> tirupaticnc@yahoo.in</p>
                            <p><b>Sales Support:</b><br />sales@tirupaticnc.in<br />sales.tirupaticnc@gmail.com</p>

                            <p className="mb-1">📞 +91 99255 59087</p>
                            <p className="mb-1">📞 +91 99298 20087</p>
                            <p className="mb-1">📞 +91 99255 9087</p>

                            <div className="mt-3">
                                <a href="#" className="me-3 text-white fs-5"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="me-3 text-white fs-5"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="me-3 text-white fs-5"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="me-3 text-white fs-5"><i className="bi bi-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ===== GOOGLE MAP ===== */}
            <div className="container-fluid p-0">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Plot%20No.%2077%2C%20Shiv%20Colony%2C%20Sector-22%2C%20Faridabad-121005&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
}

export default Contact;
