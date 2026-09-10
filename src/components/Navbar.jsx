function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand col-2" href="#">
                    <img src="public/img/dc-logo.png" alt="Logo" width="60" height="48" class="d-inline-block align-text-top"></img>
                </a>
                <div className="collapse navbar-collapse col-10" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">CHARACTERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary text-decoration-underline fw-bold" href="#">COMICS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">MOVIES</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">TV</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">GAMES</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">COLLECTIBLES</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">VIDEOS</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">FANS</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">NEWS</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">SHOP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}
export default Navbar;