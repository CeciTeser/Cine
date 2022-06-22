import { FC } from 'react';
import { Pagination } from '../../components/Common/Pagination';

import { Layout } from '../../components';
import { Footer } from '../../components/Common';
import { Movies  } from '../../components/Layout/Movies';


import { useItems } from '../../hooks';



const MoviesPage:FC =()=>{

    const { data } = useItems()

    return (  
        <Layout page ='Movies'>
            <Movies items={data.results}/>
            <Pagination/>
            <Footer/>
        </Layout>
    )
}
export default (MoviesPage);