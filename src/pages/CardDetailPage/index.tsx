import { FC } from 'react';

import { Layout } from '../../components/Layout';
import { CardDetail } from '../../components/Layout/CardDetail';



const CardDetailPage: FC =()=>{ 

    return (  
        <Layout page ='DetailCard'>
           <CardDetail />
        </Layout>
    )
}
export default (CardDetailPage);
