import { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Items from "./Items";

function Home ()
{
    let [nup,setup]=useState([]);
    let [dat,setdat]=useState([]);
    let[getid,setgetid]=useState('');

    let [one,setone]=useState(null);

    useEffect(()=>{
     
    },[one]);


    return(
        <>
            <Header dt={dat} setdt={setdat} setu={setup} up={nup}></Header>
            {one? <Items o={one} seto={setone} id={getid}/> : <Product dt={dat} setdt={setdat} setu={setup} up={nup} seto={setone} id={setgetid}></Product>}
        </>
    )
}
export default Home;