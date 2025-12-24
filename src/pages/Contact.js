function Contact() {
    return (
        <div className="container my-5">
            <h2>Enquiry Form</h2>

            <form className="row g-3">
                <div className="col-md-6">
                    <input className="form-control" placeholder="Name" />
                </div>

                <div className="col-md-6">
                    <input className="form-control" placeholder="Phone" />
                </div>

                <div className="col-12">
                    <textarea className="form-control" placeholder="Requirement"></textarea>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
