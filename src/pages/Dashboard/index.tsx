import { FC } from 'react';

import { Layout } from '../../components';
import { ItemsList } from '../../components/Layout';

import { useItems } from '../../hooks';



const Dashboard:FC =()=>{

    const { data } = useItems()

    return (  
        <Layout page ='Dashboard'>
              <ItemsList items={data.results}/>
        </Layout>
    )
}
export default (Dashboard);