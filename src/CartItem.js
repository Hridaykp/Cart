import React from "react";

class CartItem extends React.Component {
    
    increaseQuantity=()=>{
        console.log("this", this.state);
        // set state from 1
        // this.setState({
        //     Qty: this.state.Qty+1
        // })
        // if prevState required use this
        this.setState((prevState)=>{
            return{
                Qty: prevState.Qty + 1
            }
        });
    }
    decreaseQuantity=()=>{
        this.setState((prevState)=>{
            return{
                Qty: prevState.Qty != 0? prevState.Qty -1 :0
            }
        })
    }
    render() {
        console.log("this.props", this.props)
        const {price, title, Qty} = this.props.product;
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
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            alt="increase" 
                            className="action-icons"
                            onClick={this.increaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            alt="decrease" 
                            className="action-icons"
                            onClick={this.decreaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" 
                            alt="delete" 
                            className="action-icons"
                        />
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