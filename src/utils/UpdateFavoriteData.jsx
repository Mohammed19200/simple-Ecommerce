import React from 'react'
import axios from "axios";
export default function UpdateFavoriteData(favorite, userId) {
    axios.patch(`http://localhost:3004/users/${userId}`, { favorite })
    return (
        <div></div>
    )
}
