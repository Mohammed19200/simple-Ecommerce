import React from 'react'
import { useRecoilState } from 'recoil'
import { $TabNum } from '../../../atoms/TabAtom'
import Delivery from './Delivery'
import Paymant from './Paymant'
export default function Buttonschoose() {
    const [TabNum, setTabNum] = useRecoilState($TabNum)
    return (
        <div>

            <h1 className='checkoutfirstdiv1h1 col-12'>Checkout</h1>
            <div className='col-12 buttoncheckoutstylee'>
                <button className={TabNum == 1 ? 'col-4 buttoncheckoutss1' : 'col-4 buttoncheckoutss2'} onClick={() => { setTabNum(1) }}>Delivery</button>
                <button className={TabNum == 2 ? 'col-4 buttoncheckoutss1' : 'col-4 buttoncheckoutss2'} onClick={(e) => { setTabNum(2); e.preventDefault() }}>Paymant</button>
            </div>
            <div>

                {TabNum == 1 ? <Delivery /> : null}
                {TabNum == 2 ? <Paymant /> : null}
            </div>

        </div>
    )
}
