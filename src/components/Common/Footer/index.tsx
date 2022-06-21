import { FC } from "react"

import { Link } from 'react-router-dom';

import './styles.scss';


const Footer: FC = () => {

   
    return (
    
        <div className="container-fluid">

            <div className="footer">

                <div className="d-flex flex-column align-items-center">

                    <div className="up-row d-flex flex-row justify-content-between">

                        <div>

                            <ul>

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

                            <ul>

                                <li className="nav-item">
                        
                                    <Link className= "nav-link"  to= {``}>Facebook</Link>
                                
                                </li>
                                
                                <li className="nav-item">

                                    <Link className= "nav-link"  to= {``} >Twitter</Link>
                    
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                    <div className="down-row d-flex flex-row justify-content-between">

                        <div>

                            <ul>

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
                        
                                    <Link className= "nav-link"  to= {``}> 2007-2014 MovieRountable</Link>
                                
                                </li>
                            
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export { Footer }
