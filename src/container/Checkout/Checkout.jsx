import React, {Component} from 'react'
import './Checkout.css'

class Checkout extends Component {
    render() {
        return(
            <div className='checkout'>
                <div className='total'>
                    <div>
                        <div className='subtotal'>Sub-Total</div>
                        <div className='items'>{this.props.totalItem} items</div>
                    </div>
                    <div className='total-amount'>IDR {this.props.totalPrice}K</div>
                </div>
                <button className='checkout-button'>Checkout</button>
            </div>
        )
    }
}

export default Checkout;