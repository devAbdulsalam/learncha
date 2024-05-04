import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ClimateLogout = () => {
    console.log('AccessToken Deleted!')
    const navigate = useNavigate();
    
    useEffect(() => {
        if (true) {
            localStorage.removeItem('accessToken');
            navigate("/climate/login");}
    });

  return (
    <div>ClimateLogout</div>
  )
}

export default ClimateLogout