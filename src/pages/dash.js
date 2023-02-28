import React, { useState, useEffect } from 'react'
import Layout from "../components/layout";
import { Link, navigate } from "gatsby"
import Headings from "../components/headings";

const dash = () => {
    const [admin, setAdmin] = useState(false);

    const buttonClick = () => {
        setAdmin(true);
    }

    useEffect(() => {
        setAdmin(localStorage.getItem('admin') ? true : false)

        if (admin) {
            localStorage.setItem('admin', admin);
            navigate('/')
        }
    }, [admin]);

    return (
        <Layout>
            <Headings
                title="Administrator Mode"
                description="Click to display Admin setting"
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
