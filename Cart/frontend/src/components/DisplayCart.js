import React, { useEffect, useState } from 'react'

const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const cartId = getCookie('cartId');
console.log(cartId)
const emptyCart = <h3 id='mar'>Empty Cart</h3>
function DisplayCart({setTotal}){
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(emptyCart)
    const getItems = async () => {
        try {
            if (cartId) {
                const response = await fetch(`http://localhost:8080/cartService/${cartId}`)
                if (response.status !== 404){
                    const json = await response.json()
                    let cart = json.body.items
                    setData(PrepareCartData(cart, setTotal))
                }
            }
        } catch (err) {
            console.error(err)
        }finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getItems()
    }, [])
    return (
        <>  
            {isLoading ? (
                <h3 id='mar'>Loading...</h3>
            ) : (
                <>{data}</>
            )}
        </>
    )
}

function PrepareCartData(cart, setTotal){
    let hash = {}
    for (let index = 0; index < cart.length; index++){
        let itemId = cart[index].itemId
        if (hash[itemId]){
            hash[itemId].count++
        } else {
            hash[itemId] = cart[index]
            hash[itemId].count = 1
        }
    }

    let keys = Object.keys(hash) 
    let cartItems = []
    let sum = 0
    for (let index = 0; index < keys.length;index++){
        let key = keys[index]
        let item = hash[key]
        item.subtotal = item.count * item.price
        sum += item.subtotal
        cartItems.push(item)
    }
    setTotal(sum)
    const items = cartItems.map(item => 
        <h3 key={item.itemId}>
            {item.count} : {item.title} <br/>
            Total: {item.subtotal}
        </h3>
    )
    return items
}


export default DisplayCart