function BarraFooter() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container-fluid px-4">

                <div className="d-flex">
                    <a href="#" className="btn btn-outline-primary border-2 text-uppercase fw-bold px-3 py-2 text-white">
                        Sign-Up Now!
                    </a>
                </div>

                <div className="d-flex align-items-center gap-3 ms-auto">
                        <span className="text-primary fw-bold text-uppercase small">Follow Us</span>
                        <a className="text-secondary fs-5 hover-light" href="#">
                            <img src="public/img/footer-facebook.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        </a>
                        <a className="text-secondary fs-5 hover-light" href="#">
                            <img src="public/img/footer-twitter.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        </a>
                        <a className="text-secondary fs-5 hover-light" href="#">
                            <img src="public/img/footer-youtube.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        </a>
                        <a className="text-secondary fs-5 hover-light" href="#">
                            <img src="public/img/footer-pinterest.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        </a>
                        <a className="text-secondary fs-5 hover-light" href="#">
                            <img src="public/img/footer-periscope.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        </a>
                </div>
            </div>

        </nav>
    )
};

export default BarraFooter