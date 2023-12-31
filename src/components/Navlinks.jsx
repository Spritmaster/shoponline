
const links = [
    { id: 1, url: '/', text: 'Home' },
    { id: 2, url: 'about', text: 'About' },
    { id: 3, url: 'products', text: 'Products' },
    { id: 4, url: 'cart', text: 'Cart' },
    { id: 5, url: 'checkout', text: 'Checkout' },
    { id: 6, url: 'orders', text: 'Orders' },
 ];
 
 import { NavLink } from "react-router-dom";
 
 function Navlinks() {
 
    return (
       links.map((item) => {
          return (
             <li key={item.id}>
                <NavLink to={item.url}>{item.text}</NavLink>
             </li>
          )
       })
    )
 }
 
 export default Navlinks