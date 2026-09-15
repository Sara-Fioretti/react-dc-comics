function NavIcone() {
    return (
        <div className=" p-3 container-fluid bg-primary">
            <div className="d-flex justify-content-center align-items-center flex-nowrap gap-4">
                <div className=" d-flex align-items-center text-nowrap">
                    <img src="public/img/buy-comics-digital-comics.png" alt="digital comics" width="30" height="30"/>
                    <span className="text-white small">DIGITAL COMICS</span>
                </div>
                <div className=" d-flex align-items-center text-nowrap">
                    <img src="public/img/buy-comics-merchandise.png" alt="merchandise" width="30" height="30"/>
                    <span className="text-white small">DC MERCHANDISE</span>
                </div>
                <div className=" d-flex align-items-center text-nowrap">
                    <img src="public/img/buy-comics-subscriptions.png" alt="subscription" width="30" height="30"/>
                    <span className="text-white small">SUBSCRIPTION</span>
                </div>
                <div className=" d-flex align-items-center text-nowrap">
                    <img src="public/img/buy-comics-shop-locator.png" alt="shop locator" width="30" height="30"/>
                    <span className="text-white small">COMIC SHOP LOCATOR</span>
                </div>
                <div className=" d-flex align-items-center text-nowrap">
                    <img src="public/img/buy-dc-power-visa.svg" alt="power visa" width="30" height="30"/>
                    <span className="text-white small">DC POWER VISA</span>
                </div>
        
            </div>
        </div>
    )
}
export default NavIcone;