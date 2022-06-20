import { FC } from "react";

import { useItems } from "../../../hooks";

import { Item } from "../../../types";


type Props={
    items:Item[], 
       
}

const ItemsList :FC<Props> = ({items}) =>{


    return(
       
            <div>
                    {items && items?.map((item) => {                       

                        const imageBroken = (!item.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${item.poster_path}`

                        return (
                           
                                    <div>
                                        <img src ={imageBroken}  alt={item.title}></img>
                                        <h5 >{item.title}</h5>
                                        <div >{item.vote_average}</div>
                                    </div>
                        )
                    })}
            </div>                       
                              
    )
}   

export {ItemsList}