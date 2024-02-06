import { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";

function Home() {

    let [productdata,setproductdata]=useState(null);
    let [searchdata,setsearchdata]=useState(null);

    return (
        <>
            <Header data={productdata} setsearch={setsearchdata}/>
            <Product setdata={setproductdata} search={searchdata}/>
        </>
    )
}
export default Home;