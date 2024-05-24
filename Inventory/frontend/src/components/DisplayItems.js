import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCart";

const ShowInventory = () => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getItems = async () =>{
        try {
            const response = await fetch('http://localhost:8080/inventoryService')
            const json = await response.json()
            const listItems = json.map(item => 
                <li key={item.itemId}>
                    Title: {item.title} <br />
                    Description: {item.description}<br />
                    Price: {item.price}<br />
                    Category: {item.category}<br />
                    <AddToCartButton item={item}/>
                </li>
            )
            setData(listItems)
            console.log(json)
        } catch (err){
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getItems()
    }, [])
    return (
        <div>
            {isLoading ? (
                <p>shits loading...</p>
            ) : (
                <>
                    <p>
                        successfully got {data ? data.length : 0} items from the inventory.
                    </p>
                    <ul>{data}</ul>
                </>
            )}
        </div>
    )
}



export default ShowInventory