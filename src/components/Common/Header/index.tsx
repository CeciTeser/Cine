import { FC } from "react";
import { Search } from "../../Layout";
import { Nav } from '../Nav';


import './styles.scss';


type Props={
    hideNav?:boolean, 
}

const Header: FC < Props > = ({hideNav}) => {

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
            <div className="header">
                <header className="d-flex justify-content-end pe-5">{!hideNav &&  <Nav/>} </header>
                <div className="d-flex flex-column align-items-center pt-5">
                    <h2>YOUR FAVOURITE MOVIES. EXPLAINED.</h2>
                    <h4>Figure out what happened. Then find out why.</h4>
                    <Search/>
                </div>
            </div>
        </div>
    )

}

export { Header }
