import { FC } from 'react';

type Props={
    className?: string,
    children: React.ReactNode,
}
const Main:FC <Props> =({children, className})=>{
    return (
        <>
            <main className = {className} >{children}</main>
            
        </>
    )
}   

export { Main };