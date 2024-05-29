import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCart";

const ShowInventory = ({ setCartCount}) => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [retry, setRetry] = useState([0])
    
    const getItems = async () =>{
        try {
            const response = await fetch('http://localhost:8080/inventoryService')
            if (response.status !== 200) {
                retry[0]++ 
                return
            }
            const json = await response.json()
            const listItems = json.map(item => 
                <td key={item.itemId}>
                    Title: {item.title} <br />
                    Description: {item.description}<br />
                    Price: {item.price}<br />
                    Category: {item.category}<br />
                    <AddToCartButton item={item} setCartCount={setCartCount}/>
                </td>
            )

            let rows =  []
            let chunk = []
            for (let i = 0; i < listItems.length; i++){
                chunk.push(listItems[i])
                if (chunk.length === 3 || i == listItems.length - 1) {
                    rows.push(
                        <tr>
                            {chunk}
                        </tr>
                    )
                    chunk = []
                }
            }
            
            setData(rows)
        } catch (err){
            retry[0]++ 
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
                <p>loading...</p>
            ) : (
                <>
                    <table>{data}</table>
                </>
            )}
        </div>
    )
}



export default ShowInventory