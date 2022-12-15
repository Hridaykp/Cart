import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor (){
        super();
        this.state = {
            products:[
                {
                    price: 999,
                    title: "Watch",
                    Qty: 1,
                    img: " ",
                    id:1
                },
                {
                    price: 9999,
                    title: "Phone",
                    Qty: 1,
                    img: " ",
                    id: 2
                },
                {
                    price: 12000,
                    title: "Mob",
                    Qty: 1,
                    img: " ",
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity=(product) =>{
        const{products} = this.state
        const index = products.indexOf(product)

        products[index].Qty += 1 ;
        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity=(product) =>{
        const{products} = this.state
        const index = products.indexOf(product)
        if(products[index].Qty == 0){
            return;
        }
        products[index].Qty -=1;
        
        this.setState({
            products: products
        })
    }
    handleDeleteProduct = (id)=> {
        const {products}  = this.state;

        const items = products.filter((item) => item.id !== id)
        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                            product ={product} 
                            key={product.id} 
                            onIncreaseQty= {this.handleIncreaseQuantity}
                            onDecreaseQty= {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )}
                )}
            </div>
            
        );
    }
}
export default Cart;