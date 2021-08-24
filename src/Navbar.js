import react from "react";

const Navbar = () => {
    return (
        <div className="container row"> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid ">
                    <div className="col-md-3">   
                    <a className="navbar-brand " href="#">Bootstrap & react </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" col-md-1">   
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contac</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;