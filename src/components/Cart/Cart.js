import React from 'react';

import {Card, CardGroup, CardBody,CardText,CardTitle,Button, } from 'reactstrap';


const Cart = (props) => {
  //console.log(props);
  const cart=props.cart;
  const total=cart.reduce((total,prd)=>total+prd.price,0)
  let discount=0;
  if(total>40){
    discount=9.99;

  }
  else if(total>25){
    discount=5.00;
  }
  const grandTotal=(total-discount).toFixed(2);
  const formatNumber = num =>{
    const precision=num.toFixed(2);
    return precision;
  }
  return (
    <div className="cart-summary">
      <CardGroup>
      <Card>
        <CardBody>
        <CardTitle><h2>Order Summary</h2></CardTitle>
     <CardText>Courses ordered: {cart.length}</CardText>
     <p>Course Price: $ {formatNumber(total)}</p>
      <p><small>Discount:$ {discount}</small></p>
     <p>Total Price:$ {grandTotal}</p>
     <Button color="primary"> Review Your Order</Button>

        </CardBody>
      
    
     </Card>
      </CardGroup>
      
     
      
    </div>
  );
};

export default Cart;