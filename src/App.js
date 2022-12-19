import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


class App extends  React.Component {
    constructor (){
        super();
        this.state = {
            products:[],
            loading: true
        }
        this.db = firebase.firestore();
    }

    componentDidMount(){
        this.db
            .collection('products')
            .onSnapshot((snapshot)=>{
                // console.log(snapshot);
                snapshot.docs.map((doc)=>{
                    console.log(doc.data())
                });

                const products = snapshot.docs.map((doc)=>{
                    const data = doc.data();
                    data['id'] = doc.id;
                    return data;
                })

                this.setState({
                    products: products,
                    loading: false
                })
            })   
    }
    handleIncreaseQuantity=(product) =>{
        const{products} = this.state
        const index = products.indexOf(product) 
        // products[index].Qty += 1 ;
        // this.setState({
        //     products
        // })
        const docRef = this.db.collection('products').doc(products[index].id);
        docRef.update({
            Qty: products[index].Qty + 1
        })
        .then(()=>{
            console.log("Updated sucessfully");
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }
    handleDecreaseQuantity=(product) =>{
        const{products} = this.state
        const index = products.indexOf(product)
        const docRef = this.db.collection('products').doc(products[index].id);
        if(products[index].Qty === 0){return;}
        docRef.update({
            Qty:products[index].Qty - 1
        })
        .then(()=>{
            console.log("Updated sucessfully");
        })
        .catch((error)=>{
            console.log("error",error);
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
            count += (product.Qty);
        });
        return count;
    }
    getCartTotal = () =>{
        const {products} = this.state
        let cartTotal = 0;
        products.map((product) => {
            if(product.Qty>0){
                cartTotal += (product.Qty* product.price);
            }
            return "";
        });
        return cartTotal +" ₹";
    }
    addProduct = () =>{
        this.db
            .collection('products')
            .add({
                img: "https://5.imimg.com/data5/XL/MI/MY-45738738/samsung-washing-machine-500x500.jpg",
                price: 900,
                Qty: 3,
                title: "Washimg machine"
            })
            .then((docRef)=>{
                console.log("product has been added",docRef);
            })
            .catch((error)=>{
                console.log("error",error);
            })

    }

    render(){
        const {products, loading} = this.state;
        return (
            <div className="App">
                <Navbar
                    count = {this.getCartCount()}
                />
                {/* <button onClick={this.addProduct} style={{color:"lightcoral",fontFamily:"monospace",padding:20}}>Add a product</button> */}
                <Cart 
                    products = {products}
                    onIncreaseQty= {this.handleIncreaseQuantity}
                    onDecreaseQty= {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                />
                {loading && <h3>Loading Products...</h3> }
                <div style={{fontSize:30, fontWeight:"bold",marginLeft:20}}>TOTAL : {this.getCartTotal()} </div>
            </div>
        );
    }
}

export default App;
