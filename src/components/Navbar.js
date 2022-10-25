import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from "prop-types"

export default function Navbar(props) {
  return (
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    
          </ul>
          {/* <div className="d-flex">
            <div onClick={() => { props.toggleMode('primary') }} className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            <div onClick={() => { props.toggleMode('success') }} className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            <div onClick={() => { props.toggleMode('danger') }} className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
            <div onClick={() => { props.toggleMode('warning') }} className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
          </div>*/}
        </div> 
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" onClick={() => { props.toggleMode('primary') }} className="custom-control-input" id="customSwitch1" />
  <label className="custom-control-label" htmlFor="customSwitch1">Toggle Mode</label>
</div>
</nav>
      </div>
  )
}