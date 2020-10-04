import React, {useEffect,useState} from 'react'
import Imagehelper from './helper/imagehelper';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';


const Card = ({
    product,
    addtoCart = true,
    removecart = false,
    setReload = f => f,
    //   function(f){return f}
    reload = undefined
  }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);
  
    const cartTitle = product ? product.name : "A photo from pexels";
    const cartDescrption = product ? product.description : "Default description";
    const cartPrice = product ? product.price : "DEFAULT";
  
    const addToCart = () => {
      addItemToCart(product, () => setRedirect(true));
    };
  
    const getARedirect = redirect => {
      if (redirect) {
        return <Redirect to="/cart" />;
      }
    };
  
    const showAddToCart = addtoCart => {
      return (
        addtoCart && (
          <button
            onClick={addToCart}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to Cart
          </button>
        )
      );
    };
  
    const showRemoveFromCart = removeFromCart => {
      return (
        removeFromCart && (
          <button
            onClick={() => {
              removeItemFromCart(product._id);
              setReload(!reload);
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
        )
      );
    };
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <Imagehelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescrption}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">₹ {cartPrice}</p>
          <div className="row">
            <div className="col-12">{showAddToCart(addtoCart)}</div>
            <div className="col-12">{showRemoveFromCart(removecart)}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
