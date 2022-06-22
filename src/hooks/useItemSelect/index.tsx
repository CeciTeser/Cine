import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { processItemById } from "../../redux/actions/itemById";


import { Item } from "../../types";

type ItembyIdStore={
    itemById:{
         data: Item,
     }
 };
 

 const useItemSelect =()=>{
 
    const {data} = useSelector((state:ItembyIdStore)=> state.itemById)

    const {idItem} = useParams<{idItem:string}>()

    const dispatch = useDispatch()

    useEffect (()=>{

        dispatch(processItemById(idItem!))
        
    },[dispatch, idItem])


    return {data , idItem }

}
export {useItemSelect}