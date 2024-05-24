import { useState } from "react"

const AddToCartButton = ({item, setCartCount}) => {
    const [isLoading, setLoading] = useState(false)

    async function addItemToCart(){
        try{
            setLoading(true)
            let cartId = localStorage.getItem("cartId")
            cartId = cartId ? "/" + cartId : "/new"
            let response = await fetch(`http://localhost:8080/cartService${cartId}`, {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            })
            let json = await response.json()
            if (cartId === "/new"){
                localStorage.setItem("cartId", json.body.cartId)
            }
            setCartCount(json.body.items.length)
        } catch (err) {
            console.error(`Error fetching data: ${err}`)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <button onClick={addItemToCart} disabled={isLoading}>
                Add To Cart
            </button>
        </>
    )
}

export default AddToCartButton