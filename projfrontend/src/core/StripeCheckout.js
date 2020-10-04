// import React, {useState, useEffect} from 'react'
// import { isAutheticated } from '../auth/helper'
// import { cartEmpty, loadCart } from './helper/cartHelper'
// import { Link } from 'react-router-dom'
// import StripeCheckoutButton from "react-stripe-checkout"
// import { API } from '../backend'
// import { createOrder } from './helper/orderHelper'


// const StripeCheckout = ({
//     products,
//     setReload = f => f,
//     reload = undefined
// }) => {

//     const [data, setData] = useState({
//         loading: false,
//         success: false,
//         error: "",
//         address: ""

//     });

//     const token = isAutheticated() && isAutheticated().token
//     const userId = isAutheticated() && isAutheticated().user._id
    
//     const getFinalprice = () => {
//         let amount =0
//         products.map(p => {
//             amount = amount + p.price   
//         })
//         return amount;
//     };
    
//     const makePayment = (token) => {
//         const body = {
//             token ,
//             products
//         }
//         const headers ={
//             "Content-Type": "application/json"
//         }
//         return fetch(`${API}/stripepayment`, {
//             method:"POST",
//             headers,
//             body:JSON.stringify(body)
//         }).then(response => {
//             console.log(response)
//             // call further methods
//             const {status} = response;
//             console.log("STATUS ", status);
//             // cartEmpty();
//         }).catch(error => {
//             console.log(error)
//         })
//     };

//     const showStripeButton = () => {
//         return isAutheticated() ? (
//             <StripeCheckoutButton
//             stripeKey="pk_test_51HL7LVIJCGe1p8XZBWV5dCt7UMjNy9hC6pgTTPGnNPmR30CxY4Cwut7ObOJDM2VyskBgzZiIrzwaGpkpbCyPsFrG00lMzAB5O9"
//             token={makePayment}
//             amount={getFinalprice() *100}
//             name= "Buy Canvas " 
//             shippingAddress
//             billingAddress
//             >
//                 <button className="btn-success">Pay with Stripe</button>
//                 </StripeCheckoutButton>
//         ) : (
//             <Link to="/signin">
//                 <button className="btn-warning">Sign In</button>
//             </Link>
//         )
//     }

    
//     return (
//         <div>
//             <h3 className="text white">Stripe Checkout {getFinalprice()}</h3>
//             {showStripeButton()}
//         </div>
//     )
// }
// export default StripeCheckout