import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCart";

const ShowInventory = ({setCartId, setCartCount}) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [retry2, setRetry] = useState([])
    let retry = []
    const getItems = async () =>{
        try {
            const response = await fetch('http://localhost:8080/inventoryService')
            if (response.status !== 200) {
                
                return
            }
            const json = await response.json()
            const listItems = json.map(item => 
                <td key={item.itemId}>
                    Title: {item.title} <br />
                    Description: {item.description}<br />
                    Price: {item.price}<br />
                    Category: {item.category}<br />
                    <AddToCartButton item={item} setCartCount={setCartCount} setCartId={setCartId}/>
                </td>
            )
            retry = []
            setData(listItems)
            console.log(listItems)
        } catch (err){
            
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getItems()
    }, retry)
    return (
        <div>
            {isLoading ? (
                <p>shits loading...</p>
            ) : (
                <>
                    <p>
                        successfully got {data ? data.length : 0} items from the inventory.
                    </p>
                    <table>{data}</table>
                </>
            )}
        </div>
    )
}



export default ShowInventory