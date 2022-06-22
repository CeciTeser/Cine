import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { StarRating } from "../../StarRaiting";

import { useItemSelect } from "../../../hooks";



import './styles.scss';


const CardDetail :FC = () =>{


    const navegate = useNavigate()

    const { data } = useItemSelect()

    const imageBroken = (!data.poster_path)? "https://i.stack.imgur.com/6M513.png" : `http://image.tmdb.org/t/p/w500${data.poster_path}`

    

    return(

        <div className="container">

            <button className="goback-btn my-5" onClick={() => navegate(-1)}> <i className="fas fa-chevron-left pe-2"></i>GO BACK</button>
            
            <section className="card mb-5"> 
                <div className="row">
                    <div className="col-md-4">
                        <img src ={imageBroken}  className="img-fluid rounded-start" alt={data.title}></img>
                    </div>  
                    <div className="col-md-8 d-flex">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{data.title}</strong></h5>
                            <p className="card-text">{data.original_title}</p>
                            <div className='vote'>{data.vote_average}</div>
                            <StarRating stars={data.vote_average} />
                            <p className="card-text">{data.overview}</p>
                            <p className="card-text"> <strong>Release date:</strong> {data.release_date}</p>
                            <p className="card-text"> <strong>Original language:</strong> {data.original_language}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>  
    )
};

export {CardDetail}