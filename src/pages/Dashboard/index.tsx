import { FC, useEffect, useState } from 'react';

import { Layout } from '../../components';
import { Footer } from '../../components/Common';
import { Header } from '../../components/Common/Header';
import { Account, ItemsList } from '../../components/Layout';
import { StarRatingFilter } from '../../components/StarRaitingFilter';

import { useItems } from '../../hooks';
import { Item } from '../../types';



const Dashboard:FC =()=>{

    const { data, starFilter } = useItems()

    const [raiting, setRaiting] = useState(0)

    const [starFilterArray, setStarFilterArray] = useState<Item[]>();

    const noFoundResults = 'All the options shown as the star filter has no results.'


    useEffect(()=>{
        const starArray = starFilter(raiting*2)
        
        setStarFilterArray(starArray)
     
    },[raiting])


    const itemsToShow = (!starFilterArray || starFilterArray.length===0)? data.results : starFilterArray

    return (  
        <Layout page ='Dashboard'>
            <Header/>
            <StarRatingFilter stars={5} raiting={raiting} setRaiting={setRaiting}/>
            <div className='d-flex justify-content-center align-items-center'>
            <h2>{ (starFilterArray?.length === 0 && raiting !== 0)  && noFoundResults}</h2>
            </div>
            <ItemsList items={itemsToShow}/>
            <Account/>
            <Footer/>
        </Layout>
    )
}
export default (Dashboard);