

const Footer = ({setCategory}) => {
    return (
        <footer className="bg-dark text-white pt-4 pb-3 mt-5 border-top border-secondary">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-6 text-start">
                        <a
                            className="navbar-brand fw-bold fs-3"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setCategory("general")}
                        >
                            <span style={{ color: '#FF3D00' }}>Bolton</span>
                            <span style={{ color: '#FFFFFF' }}>News</span>
                        </a>
                    </div>
                    <div className="col-6 text-end">
                        <ul className="navbar-nav d-flex flex-row justify-content-end gap-4">
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="https://www.linkedin.com/in/talha-rana-67401b2a5/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="https://github.com/TalhahRao" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="https://x.com/Rao_Talhah" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-3 mt-sm-3 mt-0 col-12">
                        <ul className="navbar-nav text-start">
                            <li className="nav-item underline">
                                <div className="nav-link text-white fw-bold fs-6">Discover More</div>
                            </li>
                            <li className="nav-item underline">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("business")}>Business</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("entertainment")}>Entertainment</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("health")}>Health</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("science")}>Science</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("sports")}>Sports</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link mx-2 text-gray" onClick={() => setCategory("technology")}>Technology</div>
                            </li>

                        </ul>
                    </div>

                    <div className="col-sm-3 col-md-3 mt-sm-3 mt-0 col-12">
                        <ul className="navbar-nav text-start">
                            <li className="nav-item underline">
                                <div className="nav-link text-white fw-bold fs-6">Documentation</div>
                            </li>

                            <li className="nav-item ps-2 underline">
                                <div href="https://newsapi.org/docs/get-started" className="nav-link text-gray">Get Started</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://newsapi.org/" className="nav-link text-gray">News API</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://newsapi.org/docs" className="nav-link text-gray">API Docs</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://newsapi.org/pricing" className="nav-link text-gray">Pricing</div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-3 col-md-3 mt-sm-3 mt-0 col-12">
                        <ul className="navbar-nav text-start">
                            <li className="nav-item underline">
                                <div className="nav-link text-white fw-bold fs-6">Top References</div>
                            </li>

                            <li className="nav-item ps-2 underline">
                                <div href="https://www.bbc.com/" className="nav-link text-gray">BBC World</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://www.aljazeera.com/" className="nav-link text-gray">Al Jazeera</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://www.thenews.com.pk/" className="nav-link text-gray">The News</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://abcnews.go.com/International" className="nav-link text-gray">ABC News</div>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <div href="https://www.dawn.com/" className="nav-link text-gray">Dawn News</div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 mt-sm-3 mt-0 col-12">
                        <ul className="navbar-nav text-start">
                            <li className="nav-item underline">
                                <div className="nav-link text-white fw-bold fs-6">Contact Us</div>
                            </li>

                            <li className="nav-item ps-2 underline">
                                <small className="text-secondary nav-link ">
                                    <i class="fa-solid fa-envelopes-bulk"></i> raotalhah@gmail.com
                                </small>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <small className="text-secondary nav-link ">
                                    <i class="fa-solid fa-phone"></i> +92315-024****
                                </small>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <small className="text-secondary nav-link ">
                                    <i class="fa-solid fa-location-dot"></i> Hyderabad, Sindh
                                </small>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <small className="text-secondary nav-link ">
                                    <i class="fab fa-instagram"></i> talhah_rao
                                </small>
                            </li>
                            <li className="nav-item ps-2 underline">
                                <small className="text-secondary ">
                                    <a href="https://github.com/TalhahRao" className="text-secondary nav-link">
                                    <i class="fab fa-github"></i> Talha Rana
                                    </a>
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-3 border-top">
                    <small className="text-secondary">
                        &copy; {new Date().getFullYear()} BoltonNews. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
