import React, { useState, useEffect } from 'react'
import Layout from "../components/layout";
import { Link, navigate } from "gatsby"
import Headings from "../components/headings";

const dash = () => {
    const [admin, setAdmin] = useState(localStorage.getItem('admin') ? true : false);

    const buttonClick = () => {
        setAdmin(true);
    }

    useEffect(() => {
        if (admin === false) {
            console.log("undefined");
            return;
        }
        if (admin) {
            console.log("RET FRONT PAGE");
            localStorage.setItem('admin', admin);
            navigate('/')
        }
    }, [admin]);

    return (
        <Layout>
            <Headings
                title="Set Admin Mode"
                description="Click to display Admin setting on main page"
            />
            <div className="container mt-8">
                <button class="bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded"
                    onClick={buttonClick}>
                    Set Admin Mode
                </button>
            </div>
        </Layout >

    )
}

export default dash
