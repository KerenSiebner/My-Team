export function AppHeader() {

  return <header className="app-header-section main-layout">
    <div className="logo-and-nav">
      <img src="assets/img/logo.svg" className="logo" alt="" />
      <div className="nav">
        <a href="#">home</a>
        <a href="#">about</a>
      </div>
    </div>
    <span></span>
    <button className='contact-us-btn contact-us-btn-header'>contact us</button>
    <img className="hamburger" src="assets/img/icon-hamburger.svg" alt="" />
  </header>
}

