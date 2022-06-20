import axios from 'axios';

//--------TMDB--------

const apiTmdb = axios.create({
    baseURL:'https://api.themoviedb.org/3',

    //baseURL: process.env.REACT_APP_TMDB_API

    params:{
        api_key:'91b8a203ba7436e309ba32657ae32bfd' 

        //api_key: process.env.REACT_APP_TMDB_APIKEY
    }
});

export { apiTmdb }