import React, { Component } from 'react';
import NavBar from './NavBar';


export default function Root ({ children }) {
  return (
    <div>
      <NavBar />
      <div className="col-thirds">
        {children}
      </div>
    </div>
  )
}
