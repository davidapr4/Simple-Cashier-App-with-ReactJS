import React, {Component} from 'react';
import Product from '../Product/Product';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className='Cart-Container'>
                <p>Marketplace (Counter)</p>
                <hr/>
                <Product />
            </div>
        )
    }
}

export default Home;