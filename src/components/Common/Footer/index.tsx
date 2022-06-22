import { FC } from "react"

import { FaRegistered } from 'react-icons/fa'

import { Link } from 'react-router-dom';

import './styles.scss';


const Footer: FC = () => {

   
    return (
    
        <div className="container container-style">

            <div className="footer">

                    <div className="up-row d-flex flex-row justify-content-between">

                        <div>

                            <ul className="d-flex flex-row">

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>About</Link>
                                
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link"  to= {``} >Jobs</Link>
                    
                                </li>

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>Press</Link>
                                
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link"  to= {``} >News</Link>
                    
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link" to= {``} >Gift</Link>
                    
                                </li>
                                
                            </ul>
                        </div>
                     

                        
                        <div>
                            <ul className="d-flex flex-row me-3">

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>Facebook</Link>
                                
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link"  to= {``} >Twitter</Link>
                    
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                    <div className="down-row ps-2 d-flex flex-row justify-content-between">

                        <div>

                            <ul className="d-flex flex-row">

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>Legal</Link>
                                
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link"  to= {``} >Cookies</Link>
                    
                                </li>

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>AdChoices</Link>
                                
                                </li>
                                
                            </ul>

                        </div>

                         <div>

                            <ul>

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}> <FaRegistered/> 2007-2014 MovieRountable</Link>
                                
                                </li>
                            
                            </ul>

                        </div>
                    </div>
            </div>
        </div>

    )

}


export { Footer }
