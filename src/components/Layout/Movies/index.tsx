import { FC } from "react";

import { Item } from "../../../types";

import { Link, useNavigate } from 'react-router-dom';

import { StarRating } from "../../StarRaiting";


import './styles.scss';




type Props={
    items:Item[], 
       
}

const Movies :FC<Props> = ({items}) =>{

    const navegate = useNavigate()


    return(
      
        <div className="container">
             <div className="home" >
                <Link className= "home-link" to={`/cine`}><i className="fas fa-chevron-left pe-2"></i>Home</Link>
            </div>
            <div className="row">
                    {items && items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                            <div className="col-md-3 mb-5 mt-5 d-flex flex-column justify-content-center align-items-center"    key={item.id}>
                                <div className="card each-card" onClick={
                                    () =>navegate(`/detail/${item.id}`)
                                    }>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <img src ={imageBroken}  className="img-fluid" alt={item.title}></img>
                                        <h5 className="card-title mt-3">{item.title}</h5>
                                        <div className="mt-3">{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div> 
        </div>  
    )
}   

export {Movies}