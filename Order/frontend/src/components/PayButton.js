import React, { useState } from 'react'

const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function PayButton({setOrderPlaced}) {
    const [isLoading, setLoading] = useState(false)
    const PlaceOrder = async () => {
        try{
            setLoading(true)
            document.getElementById('message').textContent = ""
            const cartId = getCookie('cartId')
            const userId = getCookie('userId')
            const auth = getCookie('auth')
            let cardNumber = document.getElementById('number').value
            let cvv = document.getElementById('cvv').value
            let expiration = document.getElementById('expiration').value
            if (!cardNumber || !cvv || !expiration){
                document.getElementById('message').textContent = "Please fill every field"
                return
            }
            let order = {
                "payment": {
                    "ccNumber": cardNumber,
                    "ccv": cvv,
                    "expirationDate": expiration
                }
            }
            const cartResponse = await fetch(`http://localhost:8080/cartService/${cartId}`)
            const cart = await cartResponse.json()
            order.items = cart.body.items
            console.log(order)
            const orderResponse = await fetch(`http://localhost:8080/orderService/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": auth
                },
                body: JSON.stringify(order)
            })
            const data = await orderResponse.json()
            if (orderResponse.status === 201){
                setOrderPlaced(true)
                fetch(`http://localhost:8080/cartService/${cartId}`, {
                    method: "DELETE"
                })
                document.getElementById('cartLink').textContent = "Cart 0"
            } else {
                document.getElementById('message').textContent = data.message
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return ( 
        <button onClick={PlaceOrder} disabled={isLoading}>Pay!</button>
    )
}

export default PayButton
  