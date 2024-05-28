import React, {useEffect, useState} from 'react';
const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  function CartLink(){
    const [cartCount, setCartCount] = useState(0)
    const cartId = getCookie('cartId')
    
    const getCartCount = async () => { 
      if (cartId){
        const response = await fetch(`http://localhost:8080/cartService/${cartId}`)
        if (response.status === 200) {
          const json = await response.json()   
          setCartCount(json.body.items.length)
        } else {
          document.cookie = `cartId=`
        }
      } else {
        setCartCount(0)
      }
    }
    
    useEffect(() => {
      getCartCount()
    },[])
  
      return (
        <li id="list6" style={{float: "right"}}><a href={`http://localhost:3002/`}  style={{color: "#f3e3e2"}}>Cart {cartCount}</a></li>
      )
  }

  export default CartLink