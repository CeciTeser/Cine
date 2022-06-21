import { FC } from 'react';

import { Layout } from '../../components';
import { ItemsList } from '../../components/Layout';
import { Search } from '../../components/Layout/Search';

import { useItems } from '../../hooks';



const Dashboard:FC =()=>{

    const { data } = useItems()

    return (  
        <Layout page ='Dashboard'>
              <Search/>
              <ItemsList items={data.results}/>
        </Layout>
    )
}
export default (Dashboard);