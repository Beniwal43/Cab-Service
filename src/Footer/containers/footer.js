import React from 'react'
import Footer from '../components/footer'
import {BsYoutube} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Order Food</Footer.Link>
                    <Footer.Link href="#">Book a ride</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">City</Footer.Link>
                    <Footer.Link href="#">Intercity</Footer.Link>
                    <Footer.Link href="#">Fright</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><BsFacebook />  Facebook</Footer.Link>
                    <Footer.Link href="#"><BsInstagram/>  Instagram</Footer.Link>
                    <Footer.Link href="#"><BsYoutube/>  Youtube</Footer.Link>
                    <Footer.Link href="#"><BsTwitter/>  Twitter</Footer.Link>
                    
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}