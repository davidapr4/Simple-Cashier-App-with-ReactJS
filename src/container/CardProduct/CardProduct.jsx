import React, {Component} from 'react';
import './CardProduct.css';

class CardProduct extends Component {
    state = {
        price:20,
        order:0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order -1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
            <div className='Card-item'>
                <div className='image-box'>
                    <img className='product-img' src='https://i.pinimg.com/564x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg' alt='americano'/>
                </div>
                <div className='about'>
                    <h1 className='product-name'>Americano</h1>
                    <h3 className='product-desc'>Espresso + Water</h3>
                </div>
                <div className='card-counter'>
                    <div className='btn' onClick={this.handleMinus}>-</div>
                    <div className='card-count'>{this.state.order}</div>
                    <div className='btn' onClick={this.handlePlus}>+</div>
                </div>
                <div className='prices'>IDR {this.state.price}K</div>
            </div>
        )
    }
}

export default CardProduct;