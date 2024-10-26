
import { useEffect } from "react";
export function Home (){
    useEffect(()=>{
        (
            async ()= >{
                await fetch('http://localhost:8000/api/', {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(isLogin ? { email, password } : { name, email, password })
                });
            }
        )(
            
        )
    })
    return(
        <>
            Home
        </>
    )
}