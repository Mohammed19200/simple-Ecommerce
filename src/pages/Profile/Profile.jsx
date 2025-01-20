import { useEffect, useState } from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authData } from '../../atoms/authAtom';

export default function Profile() {
    const [user] = useRecoilState(authData);
    const [Dataa, setDataa] = useState([])
    const [Data, setData] = useState([])
    useEffect(() => {
        axios(`http://localhost:3004/users/${user.user.id}`).then((data) => {
            setDataa(data.data.ordernew)
            setData(data.data.orderold)
        })
    }, [])

    return (
        <div className='divorderr'>

            <table className='table table-dark table-hover'>

                <thead>

                    <tr>
                        <th className='thtableorder'>-</th>
                        <th className='thtableorder'>New Order</th>
                        <th className='thtableorder'> Price</th>
                        <th className='thtableorder'> Quantity</th>
                    </tr>

                </thead>

                <tbody>

                    {Dataa.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td className='tdtableorder'>{index + 1}</td>
                                <td className='tdtableorder'>{product.title}</td>
                                <td className='tdtableorder'>{product.price}</td>
                                <td className='tdtableorder'>{product.quantity}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <table className='table table-dark table-hover'>

                <thead>

                    <tr>
                        <th className='thtableorder'>-</th>
                        <th className='thtableorder'>External Order</th>
                        <th className='thtableorder'>Price</th>
                        <th className='thtableorder'>Quantity</th>
                    </tr>

                </thead>

                <tbody>

                    {Data.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td className='tdtableorder'>{index + 1}</td>
                                <td className='tdtableorder'>{product.title}</td>
                                <td className='tdtableorder'>{product.price}</td>
                                <td className='tdtableorder'>{product.quantity}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>



        </div>
    )
}