function TopHeader() {
    return (
        <div className="bg-dark text-white py-1">
            <div className="container d-flex justify-content-between">
                <small>📞 +91 {process.env.REACT_APP_COMPANY_MOBILE1}</small>
                <small>✉ {process.env.REACT_APP_COMPANY_EMAIL}</small>
            </div>
        </div>
    );
}

export default TopHeader;
