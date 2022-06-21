import { FC } from "react";

import { Item } from "../../../types";

import { StarRating } from "../../StarRaiting";

import './styles.scss';


type Props={
    items:Item[], 
       
}

const ItemsList :FC<Props> = ({items}) =>{


    return(
      
            <div className="row">
                    {items && items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                           
                                    <div className="col-md-3 mb-5 mt-5 d-flex flex-column justify-content-center align-items-center">
                                        <img src ={imageBroken}  alt={item.title}></img>
                                        <h5 >{item.title}</h5>
                                        <div >{item.vote_average}</div>
                                        <StarRating stars={item.vote_average} />
                                    </div>
                        )
                    })}
            </div>                       
                            
    )
}   

export {ItemsList}