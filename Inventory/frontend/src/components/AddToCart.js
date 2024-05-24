import { useState } from "react"

const AddToCartButton = ({item}) => {
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
            if (cartId === "/new"){
                let json = await response.json()
                localStorage.setItem("cartId", json.body.cartId)
            }
        } catch (err) {
            console.error(`Error fetching data: ${err}`)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <button onClick={addItemToCart} disabled={isLoading}>
                {isLoading ? "Adding..." : "Add To Cart"}
            </button>
        </>
    )
}

export default AddToCartButton