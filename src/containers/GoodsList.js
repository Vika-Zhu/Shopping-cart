import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { selectGoods } from "../store/goodsSlice"

import Goods from "../components/Goods"
import { increment, sum } from "../store/cartSlice"


function GoodsList(){
    const goods = useSelector(selectGoods)
    const dispatch =useDispatch()

    let clickHandler = (event) =>{
        event.preventDefault()
        let t = event.target;
        if(!t.classList.contains('add-to-cart')) return true
        const articul = t.getAttribute('data-key');
        dispatch(increment(articul))

        const product = goods.find(item => item.articul === articul);

        if (product) {
            dispatch(sum(product.cost))
        }   
    }

    return(
        <>
        <div className='goods-field' onClick={clickHandler}>
            {goods.map(item => <Goods
                title={item.title}
                cost={item.cost}
                image={item.image}
                articul={item.articul}
                key={item.articul}
            ></Goods>)}
        </div>
        </>
    )

}

export default GoodsList