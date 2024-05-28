import { useState } from "react"
const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const AddToCartButton = ({item, setCartCount}) => {
    const [isLoading, setLoading] = useState(false)

    async function addItemToCart(){
        try{
            setLoading(true)
            let cartId = getCookie("cartId")
            cartId = cartId ? cartId : "new"
            let response = await fetch(`http://localhost:8080/cartService/${cartId}`, {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            })
            let json = await response.json()
            console.log(json)
            if (cartId === "new"){
                cartId = json.body.cartId
                sessionStorage.setItem("cartId", cartId)
                document.cookie = `cartId=${cartId}`
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