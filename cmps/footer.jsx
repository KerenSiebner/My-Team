export function Footer() {
    return <section className="footer-section full">
        <footer className="main-layout">
            <div>
                <img src="assets/img/logo.svg" style={{ width: '160px', height: 'auto', marginBottom:'25px'}} alt="" />
                <div className="nav">
                    <a href="#">home</a>
                    <a href="#">about</a>
                </div>
            </div>
            <p>987  Hillcrest Lane <br /> Irvine, CA <br /> California 92714 <br /> Call Us : 949-833-7432</p>
            <div className="social-and-rights">
                <div className="social-links">
                    <img src="assets/img/icon-twitter.svg" alt="" />
                    <img src="assets/img/icon-pinterest.svg" alt="" />
                    <img src="assets/img/icon-facebook.svg" alt="" />
                </div>
                <p className="copyright">Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    </section>
}