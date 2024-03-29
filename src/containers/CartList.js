import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { selectGoods } from "../store/goodsSlice"
import { selectCart, selectTotalAmount } from "../store/cartSlice"


import Cart from "../components/Cart"
import {remove, minus } from "../store/cartSlice"


function CartList(){
    const goods = useSelector(selectGoods)
    const cart = useSelector(selectCart)
    const totalAmount = useSelector(selectTotalAmount);

    const dispatch = useDispatch()
    
    const goodsFruitOdj = {}
    goods.forEach((item) =>{
        goodsFruitOdj[item.articul] = item
    })


    const clickHandler = (event) =>{
        event.preventDefault()
        let t = event.target;
        const articul = t.getAttribute('data-key');
        const product = goods.find(item => item.articul === articul);
        const quantity = cart[articul]

        const dispatchData = {
            articul: articul,
            quantity: quantity,
            cost: product.cost
        }

        if(t.classList.contains('minus-item')) dispatch(minus(dispatchData))
        if(t.classList.contains('remove-item')) dispatch(remove(dispatchData))
    }

    

    return(
        <div className="cart">
            {Object.keys(cart).length > 0 ?(
                <div>
                    <h1></h1>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Товар</th>
                                <th>Ціна</th>
                                <th>Кількість</th>
                                <th>Сума</th>
                            </tr>
                        </thead>
                        <tbody onClick={clickHandler} >
                            {Object.keys(cart).map((item => <Cart 
                                title={goodsFruitOdj[item]['title']} 
                                cost = {goodsFruitOdj[item]['cost']} 
                                articul={item} 
                                key={item + goodsFruitOdj[item]['title']}
                                accum ={cart[item]} 
                                img ={goodsFruitOdj[item]['image']}
                                />
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="cart-fooret">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Загальна сума:</td>
                                <td>{totalAmount}</td>
                            </tr>
                        </tfoot>
                        
                    </table>
                </div>   
            ) :(null)}
            
        </div>
    )
}



export default CartList