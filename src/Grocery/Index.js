import React from 'react';

import {connect} from 'react-redux';
import './style.css';
import {addProduct,increaseQuantity, decreaseQuantity} from '../ActionCreators/shopActions';
import Card from './Cards';
import List from './List';

class Grocery extends React.Component
{
    onAddProduct=(item)=>{
        this.props.addToList(item);
    };
    increaseQuant=(name)=>{
        this.props.incQ(name);
    }
    decreaseQuant=(name)=>{
        this.props.decQ(name);
    }
    // componentDidMount()
    // {
    //     window.alert("Alert!!!!")
    // }
        render()
        {
            return (
                <div className="app">
                <h2>Grocery App</h2>
                <div className="root-container">
                    
                    
                    <div className="left-container">
                        {
                            this.props.products.map((item)=>{
                           return <Card title={item.title} url={item.url} price={item.price} quantity={item.quantity}
                           onAdd={this.onAddProduct}/>
                        })
                        
                        }
                    </div>

                    <div className="right-container">
                        {this.props.selectedProducts.map(item=>{
                        return <List onAdd={this.increaseQuant} onSub={this.decreaseQuant} title={item.title} quantity={item.quantity}/>
                        })}
                        <h2>Total Amount:{this.props.totalAmount}</h2>
                        
                    
                    </div>
                    </div>
                    </div>
            );
        }

}

const mapStateToProps =(store) =>{
    return{
        products: store.products,
        selectedProducts: store.selectedProducts,
        totalAmount:store.totalAmount,
        quantity:store.quantity,
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        addToList:(item)=>dispatch(addProduct(item)),
        incQ:(name)=>dispatch(increaseQuantity(name)),
        decQ:(name)=>dispatch(decreaseQuantity(name)),
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(Grocery);