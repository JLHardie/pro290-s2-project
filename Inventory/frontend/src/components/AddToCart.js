import { useState } from "react"

const AddToCartButton = ({item, setCartCount, setCartId}) => {
    const [isLoading, setLoading] = useState(false)

    async function addItemToCart(){
        try{
            setLoading(true)
            let cartId = sessionStorage.getItem("cartId")
            document.cookie = `cartId=${cartId}`
            cartId = cartId ? "/" + cartId : "/new"
            let response = await fetch(`http://localhost:8080/cartService${cartId}`, {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            })
            let json = await response.json()
            if (cartId === "/new"){
                cartId = json.body.cartId
                sessionStorage.setItem("cartId", cartId)
                setCartId(cartId)
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