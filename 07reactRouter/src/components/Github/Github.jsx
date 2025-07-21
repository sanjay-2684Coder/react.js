import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
     const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sanjay-2684Coder')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
      <div className="bg-cyan-400 text-blue-800 text-center m-4 ps-4 text-3xl">
        Github followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4" />
      </div>
    )
}
export default Github;

export const githubInfoLoader = async()=> {
    const response = await fetch('https://api.github.com/users/sanjay-2684Coder')
    return response.json()
}