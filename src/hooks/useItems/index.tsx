import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { processItems } from "../../redux/actions/items";

import { Item, TotalResults } from "../../types";

type ItemsStore={
    items:{
        data: TotalResults,
        error: {errorCode:string }|null,
    }
};

type ItemsDetailStore = {
    itemDetail: {
        items: Item[];
        loading?: boolean;
        error?: string;
    };
};


const useItems = () =>{

    const [page, setPage]= useState(1)
    
    const [search, setSearch]= useState<string>('')
  
    const dispatch = useDispatch()

    const {data} = useSelector((state:ItemsStore)=> state.items)

    const itemDetail = useSelector((state:ItemsDetailStore)=> state.itemDetail)


    useEffect (()=>{
        dispatch(processItems({ page, search }))
    
    },[dispatch, page, search])



    return { data, page, setPage, search, setSearch, itemDetail}

}

export { useItems }