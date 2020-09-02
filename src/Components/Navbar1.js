import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Button} from 'reactstrap'
import './Navbar1.css'

class Navbar1 extends Component {
    render() {
        return (
            <div>
                <Navbar dark color='info' className='navli'>
                    <div className='logo'>
                        <NavbarBrand className='font-weight-bold text-light' href='/'>Nitesh Kumar</NavbarBrand>
                    </div>
                    <Nav className='ml-auto text-right'>
                        <NavItem className='d-flex ml-2 '>
                            <Button className='font-weight-bold btn btn-outline-dark bg-success' href='/about'>ABout-Me</Button>                       
                        </NavItem>
                        <NavItem className='d-flex ml-2 '>
                            <NavLink className='font-weight-bold text-dark' href='/worldclock'>WOrld CLock</NavLink>
                        </NavItem>
                        <NavItem className='d-flex ml-2 '>
                            <NavLink className='font-weight-bold text-dark' href='/stopwatch'>STop-WAtch</NavLink>
                        </NavItem>
                        <NavItem className='d-flex ml-2 '>
                            <NavLink className='font-weight-bold text-dark' href='/timer'>TImer</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
export default Navbar1