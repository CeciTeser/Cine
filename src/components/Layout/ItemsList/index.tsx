import { FC } from "react";

import { FaFire } from 'react-icons/fa'

import { Item } from "../../../types";

import { Link, useNavigate } from 'react-router-dom';

import { StarRating } from "../../StarRaiting";

import './styles.scss';



type Props={
    items:Item[], 
       
}

const ItemsList :FC<Props> = ({items}) =>{

    const navegate = useNavigate()


    return(
      
        <div className="container container-items-list">
            <div className=" mt-5 d-flex flex-row justify-content-between align-items-center me-3">
                <h2> <FaFire/> POPULAR MOVIES</h2>
                <Link className= "view-all-btn" to={`/movies`}>VIEW ALL</Link>
            </div>
            <div className="row">
                    {items && items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                            <div className="col-md-2 mb-5 mt-5 d-flex flex-column justify-content-center align-items-center">
                                <div className="card each-card" key={item.id} onClick={
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

export {ItemsList}