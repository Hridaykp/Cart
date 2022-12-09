import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 999,
            title: "Phone",
            Qty: 1,
            img: " "
        }
    }
    render() {
        const {price, title, Qty} = this.state;
        return(
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25,fontFamily:"cursive",fontWeight:"bold",color:"purple"}}>{title}</div>
                    <div style={{color:"gray"}}>{price}</div>
                    <div style={{color:"gray"}}>{Qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="increase" className="action-icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="decrease" className="action-icons"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="delete" className="action-icons"/>
                    </div>
                </div>
            </div>
        )
    }
  
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