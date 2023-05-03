import React from "react";
import Layout from '../../layouts/Layout'
import axios from 'axios'
import { useState } from "react";

/* This view component will be rendered when visiting /pages/items
 * when your application has been setup with inertiajs
 */
function Items(props) {

    const [ number, setNumber ] = useState(0);

    const update = async() => {
        let url = "/items/get-number";
        const res = await axios.get(url, {

            headers: {
                'Accept': 'application/json',
            },
            params: {

            }
        })
        console.log(res.data)
        setNumber(res.data);
        return res.data
    }

    const message = props.flash.message || "";

    return <div> 
        <h1> Hello world From Items/index! </h1> 
        <p> {message} </p>

        <ul>
        { 
            props.items && props.items.map(function(item, index) {
                return <li key={ index }> {index} - {item} </li>
            })
        }
        </ul>

        <p> { number } </p>

        <button onClick={ update }> Get Data </button>
    </div>
}

Items.layout = page => <Layout children={page} title="Welcome" />
export default Items
