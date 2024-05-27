import React, { useEffect, useState } from 'react'

const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const cartId = getCookie('cartId');

const emptyCart = <h3 id='mar'>Empty Cart</h3>

function DisplayCart({setTotal}){
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(emptyCart)
    const getItems = async () => {
        try {
            if (cartId) {
                const response = await fetch(`http://localhost:8080/cartService/${cartId}`)
                if (response.status === 200){
                    const json = await response.json()
                    let cart = json.body.items
                    if (cart.length > 0){
                        setData(PrepareCartData(cart, setTotal))
                    }
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
    
    setTotal(sum.toFixed(2))
    let items = []
    for (let index = 0; index < cartItems.length; index++){
        let item = cartItems[index]
        let inputId = `increment${index}`
        let itemId = item.itemId
        items.push(
            <h3 key={item.itemId}>
            {item.count} : {item.title} <br/>
            Total: {item.subtotal.toFixed(2)} <br />
            <input id={inputId} type='number' min={0} defaultValue="0"/>
            <IncrementButton inputId={inputId} itemId={itemId} /> 
            <DecrementButton inputId={inputId} itemId={itemId}/>
            <RemoveButton itemId={itemId}/>
            </h3>
        )
    }
    return items
}

function IncrementButton({inputId, itemId}){
    const [isLoading, setLoading] = useState(false)
    async function increment(){
        try{
        setLoading(true)
        const increment = document.getElementById(inputId).value
        const response = await fetch(`http://localhost:8080/cartService/${cartId}/${itemId}/add/${increment}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })        
        if (increment !== "0"){
            window.location.reload()
        }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
        <button onClick={increment} disabled={isLoading}>+</button>
        </>
    )
}

function DecrementButton({inputId, itemId}){
    const [isLoading, setLoading] = useState(false)
    async function decrement(){
        try{
        setLoading(true)
        const increment = document.getElementById(inputId).value
        const response = await fetch(`http://localhost:8080/cartService/${cartId}/${itemId}/delete/${increment}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (increment !== "0"){
            window.location.reload()
        }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
        <button onClick={decrement} disabled={isLoading}>-</button>
        </>
    )
}

function RemoveButton({itemId}){
    const [isLoading, setLoading] = useState(false)
    async function deleteItem(){
        try{
            setLoading(true)
            await fetch(`http://localhost:8080/cartService/${cartId}/${itemId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            window.location.reload()
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <button onClick={deleteItem} disabled={isLoading}>Remove</button>
    )
}


export default DisplayCart