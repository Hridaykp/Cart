import React from "react";

const CartItem =(props)=> {
    const {price, title, Qty} = props.product;
    const {product, onDecreaseQty, onIncreaseQty, onDeleteProduct} = props;
    return(
        <div className = "cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25,fontFamily:"cursive",fontWeight:"bold",color:"purple"}}>{title}</div>
                <div style={{color:"gray"}}>{price}</div>
                <div style={{color:"gray"}}>{Qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        alt="increase" 
                        className="action-icons"
                        onClick={()=>{onIncreaseQty(product)}}
                    />
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        alt="decrease" 
                        className="action-icons"
                        onClick={()=>{onDecreaseQty(product)}}
                    />
                    <img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" 
                        alt="delete" 
                        className="action-icons"
                        onClick={()=>{onDeleteProduct(product.id)}}
                    />
                </div>
            </div>
        </div>
    )
}
  

const styles = {
    image:{
        height:150,
        width: 150,
        borderRadius: 6,
        background: "gray"
    }
};
export default CartItem;