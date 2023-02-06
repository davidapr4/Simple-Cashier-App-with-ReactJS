import React, {Component} from 'react';
import './CardProduct.css';

class CardProduct2 extends Component {
    state = {
        price:25,
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
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(
            <div className='Card-item'>
                <div className='image-box'>
                    <img className='product-img' src='https://i.pinimg.com/564x/33/44/2e/33442e58a74503c7cef4fc437a4ebc8e.jpg' alt='americano'/>
                </div>
                <div className='about'>
                    <h1 className='product-name'>Cappucino</h1>
                    <h3 className='product-desc'>Espresso + Steamed Milk Foam</h3>
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

export default CardProduct2;