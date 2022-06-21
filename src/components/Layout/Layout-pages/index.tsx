import { FC } from 'react';

import { Main } from '../Main';

type Props={
    page?:string,
    children: React.ReactNode,

}
const Layout:FC < Props >= ({children , page})=> {

    return (
        <>

            <Main className = {page} >
            {children}
            </Main>
        </>
    )

};

export { Layout };          