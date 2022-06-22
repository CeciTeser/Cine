import { FC } from "react"

import { Link } from 'react-router-dom';

import './styles.scss';


const Nav: FC = () => {

   
    return (
    
        <nav className="navbar navbar-light navbar-expand-lg navbar-background sticky-top mt-5 mb-5">

            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
                    <ul className="navbar-nav">

                        <li className="nav-item">
                
                            <Link className= "nav-link me-5" to={`/login`}>Login</Link>
                        
                        </li>
                        
                        <li className="nav-item">

                            <Link className= "nav-link " to={`/signup`} >Sign Up</Link>
            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

      
    )

}


export { Nav }
