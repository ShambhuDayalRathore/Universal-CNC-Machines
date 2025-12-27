import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    // ===== FORM DATA STATE =====
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        companyName: "",
        city: "",
        message: ""
    });

    // ===== REQUIRED STATES (YOU WERE MISSING THESE) =====
    const [setErrors] = useState({});
    const [setSent] = useState(false);

    // ===== HANDLE INPUT =====
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ===== VALIDATION =====
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number required";

        if (!/^[0-9]{10}$/.test(formData.mobile))
            newErrors.mobile = "Enter 10 digit mobile number";

        if (!formData.email.trim()) newErrors.email = "Email required";
        if (!formData.message.trim()) newErrors.message = "Message required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ===== SUBMIT FORM =====
    const submitForm = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log(formData);

        emailjs.init(process.env.REACT_APP_GMAIL_PUBLICKEY); // <-- REQUIRED

        emailjs.send(
            process.env.REACT_APP_GMAIL_SERVICEID,
            process.env.REACT_APP_GMAIL_TEMPLATEID,
            {
                user_fullName: formData.fullName,
                user_mobile: formData.mobile,
                user_email: formData.email,
                user_companyName: formData.companyName,
                user_city: formData.city,
                user_message: formData.message,
            }
        )
            .then(() => {
                setSent(true);
                alert("Message sent successfully!");
                setFormData({
                    user_fullName: "",
                    user_mobile: "",
                    user_email: "",
                    user_companyName: "",
                    user_city: "",
                    user_message: "",
                });
            })
            .catch((err) => {
                console.log("Email error:", err);
                alert("Failed to send!");
            });
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

                            <input className="form-control mb-3" type="text" name="city" placeholder="City" onChange={handleChange} />

                            <button className="btn btn-dark px-4">Submit</button>
                        </form>
                    </div>

                    {/* ===== RIGHT: CONTACT INFO ===== */}
                    <div className="col-md-6 mb-4">
                        <div className="contact-box text-white p-4 rounded">
                            <h4 className="fw-bold mb-3">Contact Info</h4>
                            <p>
                                {process.env.REACT_APP_COMPANY_ADDRESS1},<br />
                                {process.env.REACT_APP_COMPANY_ADDRESS2}
                            </p>

                            <p><b>Admin Support:</b> {process.env.REACT_APP_COMPANY_EMAIL}</p>
                            <p><b>Sales Support:</b> {process.env.REACT_APP_COMPANY_EMAIL}</p>

                            <p className="mb-1">📞 {process.env.REACT_APP_COMPANY_MOBILE_COUNTRYCODE} {process.env.REACT_APP_COMPANY_MOBILE1}</p>
                            <p className="mb-1">📞 {process.env.REACT_APP_COMPANY_MOBILE_COUNTRYCODE} {process.env.REACT_APP_COMPANY_MOBILE2}</p>
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
