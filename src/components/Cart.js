
import React from "react"

const Cart = (props) =>{
     return(
        <tr className="cart-body">
            <td>
                <img className="cart-img" src ={props.img}></img>
            </td>
            <td>{props.title}</td>
            <td>{props.cost}</td>
            <td>{props.accum}</td>
            <td>{props.cost * props.accum}</td>
            <td>
                <button className="minus-item" data-key={props.articul}>-</button>
                <button className="remove-item" data-key={props.articul}>Delete</button>
            </td>
        </tr>
     )
};

export default Cart