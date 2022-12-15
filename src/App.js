import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends  React.Component {
    constructor (){
        super();
        this.state = {
            products:[
                {
                    price: 999,
                    title: "Watch",
                    Qty: 1,
                    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                    id:1
                },
                {
                    price: 9999,
                    title: "Phone",
                    Qty: 1,
                    img: "https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    id: 2
                },
                {
                    price: 12000,
                    title: "Mob",
                    Qty: 1,
                    img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80./ ",
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
    getCartCount = ()=>{
        const {products} = this.state

        let count = 0;
        products.forEach((product) => {
            count += product.Qty;
        });
        return count;
    }
    getCartTotal = () =>{
        const {products} = this.state
        let cartTotal = 0;
        products.map((product) => {
            cartTotal += (product.Qty* product.price);
        });
        return cartTotal;
    }
    render(){
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar
                    count = {this.getCartCount()}
                />
                <Cart 
                    products = {products}
                    onIncreaseQty= {this.handleIncreaseQuantity}
                    onDecreaseQty= {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                />
                <div style={{fontSize:30, fontWeight:"bold",marginLeft:20}}>TOTAL : {this.getCartTotal()} Rs </div>
            </div>
        );
    }
}


export default App;
