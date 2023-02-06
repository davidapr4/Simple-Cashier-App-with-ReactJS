import React, {Component, Fragment} from 'react';
import './Product.css'
import CardProduct from '../CardProduct/CardProduct';
import CardProduct2 from '../CardProduct/CardProduct2';
import Checkout from '../Checkout/Checkout';

class Product extends Component {
    state = {
        americano:0, americanoPrice:20,
        cappucino:0, cappucinoPrice:25,
        order:0,
        price:0
    }

    firstProduct = (firstValue) => {
        this.setState({
            americano: firstValue
        }, () => {
            this.handleCounterChange(this.state.americano)
        })
    }

    secondProduct = (secondValue) => {
        this.setState({
            cappucino: secondValue
        }, () => {
            this.handleCounterChange(this.state.cappucino)
        })
    }

    handleCounterChange = () => {
        this.setState({
            order: this.state.americano + this.state.cappucino,
            price: this.state.americano * this.state.americanoPrice + this.state.cappucino*this.state.cappucinoPrice
        })
    }

    render() {
        return(
            <Fragment>
                <div className='header'>
                    <h3 className='header-title'>David's Coffee</h3>
                    <div className='troley'>
                        <img className='troley-img' src='https://cdn-icons-png.flaticon.com/512/3081/3081986.png' alt='shopping cart' />
                        <div className='count'>{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.firstProduct(value)}/>
                <CardProduct2 onCounterChange={(value)=> this.secondProduct(value)}/>
                <hr className='line'/>
                <Checkout totalItem={this.state.order} totalPrice={this.state.price}/>
            </Fragment>
        )
    }
}

export default Product;