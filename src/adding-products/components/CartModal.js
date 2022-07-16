import React from 'react';
import { Button, Modal, Image, Header, Item } from 'semantic-ui-react';

import cartImg from '../img/cartImg.png'
import CartItems from './CartItems'

const CartModal = (props) => {

    console.log(props.cart, 'cart info inside CartModal!!')

    return (
        <>
            {props.cart && props.cart.total_unique_items > 0 ? (
                <>
                    <Item.Group divided>
                        {props.cart.line_items.map(item => (
                            <Item key={item.id}>
                                <CartItems item={item}/>
                            </Item>
                        ))}
                    </Item.Group>

                    <Modal.Actions className='model-bottom'>
                        <Button  
                            basic 
                            negative  
                            floated='left' 
                            onClick={props.emptyCart}
                        >
                            Empty Cart
                        </Button>
                        <Header floated='right'>{props.cart.subtotal.formatted_with_symbol}</Header>
                    </Modal.Actions>
                </>
            ) 
            :
            (
                <>
                    <Modal.Header>Seities Apparel Cart</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='huge' src={cartImg} />
                        <Modal.Description>
                            <Header>Your Cart is currently Empty</Header>
                            <p>
                                It would make you very happy if you added an item to the cart
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                </>
            )
            }
        </>
    );
};

export default CartModal;