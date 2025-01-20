import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { authData } from '../../atoms/authAtom';
import { toast } from 'react-toastify';
import { RiLogoutCircleRFill } from "react-icons/ri";



export default function LogoutButton() {
  const [authdata, setAuthData] = useRecoilState(authData);

  function handleLogout(){
    setAuthData({
      isAuth: false,
      user: null
    })
    localStorage.removeItem('loggedInData');
    toast.success('Logged out successfully')
  }

  return (
    <Button className='btnnn1111' onClick={handleLogout}><RiLogoutCircleRFill id="iconproductcarrddddLogout" />
</Button>
  )
}
