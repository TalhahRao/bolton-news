const Navbar = ({setCategory}) => {
  return (
    <nav  className="navbar navbar-expand-lg shadow-sm px-3" style={{ background: '#121212' }}>
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-3"
          style={{ cursor: 'pointer' }}
          onClick={() => setCategory("general")}
        >
          <span style={{ color: '#FF3D00' }}>Bolton</span>
          <span style={{ color: '#FFFFFF' }}>News</span>
        </a>
         <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <i className="fas fa-bars"></i>
        </button>


     <div className="collapse navbar-collapse" id="navbarContent">
  <ul className="navbar-nav mx-auto text-center">
    <li className="nav-item mx-2 underline">
      <div className="nav-link text-white" onClick={()=>setCategory("business")}>Business</div>
    </li> 
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("entertainment")}>entertainment</div>
    </li>
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("general")}>general</div>
    </li>
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("health")}>health</div>
    </li>
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("science")}>science</div>
    </li>
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("sports")}>sports</div>
    </li>
    <li className="nav-item">
      <div className="nav-link text-white" onClick={()=>setCategory("technology")}>technology</div>
    </li>

  </ul>

    
  <ul className="navbar-nav d-flex flex-row justify-content-center gap-2">
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="https://www.linkedin.com/in/talha-rana-67401b2a5/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="https://github.com/TalhahRao" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5" href="https://x.com/Rao_Talhah" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
</div>

      </div>
    </nav>
  );
};

export default Navbar;