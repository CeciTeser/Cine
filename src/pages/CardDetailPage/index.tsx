import { FC } from 'react';

import { Layout } from '../../components/Layout';
import { CardDetail } from '../../components/Layout/CardDetail';

import { useItems, useVideos } from '../../hooks';



const CardDetailPage: FC =()=>{ 

// const { itemDetail } = useItems()

    return (  
        <Layout page ='DetailCard'>
           <CardDetail />
        </Layout>
    )
}
export default (CardDetailPage);
