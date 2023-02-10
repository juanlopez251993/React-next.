import React from "react";
import ProductList from "../containers/ProductList.jsx"
import Head from "next/head.js";



export default function Home() {
    return (
        <>
            <Head>
                React Shop
            </Head>
            <ProductList />
        </>
    );
}  