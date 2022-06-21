import { FC } from "react"

import { Link } from 'react-router-dom';

import './styles.scss';


const Nav: FC = () => {

   
    return (
    
        <nav className="navbar navbar-light navbar-expand-lg navbar-background sticky-top mt-5 mb-5">

            <div className="container-fluid">

            <Link className="navbar-brand ps-3"to="/">  </Link>

            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse flex-grow-0 me-4" id="navbarSupportedContent">
             
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item">
                
                            <Link className= "nav-link" to={`/login`}>Login</Link>
                        
                        </li>
                        
                        <li className="nav-item">

                            <Link className= "nav-link" to={`/signup`} >Sign Up</Link>
            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

      
    )

}


export { Nav }
