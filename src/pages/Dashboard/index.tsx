import { FC } from 'react';

import { Layout } from '../../components';
import { Footer } from '../../components/Common';
import { Header } from '../../components/Common/Header';
import { ItemsList } from '../../components/Layout';
import { Search } from '../../components/Layout/Search';

import { useItems } from '../../hooks';



const Dashboard:FC =()=>{

    const { data } = useItems()

    return (  
        <Layout page ='Dashboard'>
            <Header/>
            <Search/>
            <ItemsList items={data.results}/>
            <Footer/>
        </Layout>
    )
}
export default (Dashboard);