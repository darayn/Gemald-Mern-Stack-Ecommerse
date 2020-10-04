import React, {useState, useEffect} from 'react'
import "../styles.css"
import { API } from "../backend";
import Base from "./Base"
import Card from './card';
import { loadCart } from './helper/cartHelper';
import StripeCheckout from './StripeCheckout';
import { Link } from 'react-router-dom';
import PaymentB from './PaymentB';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
  
    useEffect(() => {
      setProducts(loadCart());
    }, [reload]);
  
    const loadAllProducts = (products) => {
      return (
        <div>
          <h2>This section is to load products</h2>
          {products.map((product, index) => (
            <Card
              key={index}
              product={product}
              removecart={true}
              addtoCart={false}
              setReload={setReload}
              reload={reload}
            />
          ))}
        </div>
      );
    };
    const loadCheckout = () => {
      return (
        <div>
          <h2>This section for checkout</h2>
        </div>
      );
    };
  
    return (
        <Base title="Cart Page" description="Ready to Checkout">
<div className="row text-center ">
    <div className="col-6">{
    
    products.length > 0 ? loadAllProducts(products) : (<h3> No products found! - <Link to="/"
    className="nav-link text-success ">
        Add Here.
   </Link></h3>) 
    
    }</div>
   <div className="col-6">
     
     {/* <StripeCheckout 
   products = {products} 
   setReload = {setReload} -> for stripe
    />
     */
     <PaymentB products = {products} setReload = {setReload} />
     
     }
    </div>
    </div>        
    </Base>
    )
}


export default Cart;