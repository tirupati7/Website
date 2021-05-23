import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/homeCoursel.css'

class HomeCoursel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Carousel style={{marginTop:'54px'}}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/80/db/4d/80db4d08705f9055b5a60ef7fe055a99.jpg"
                        alt="First slide"
                        className="coursel-img"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://www.teahub.io/photos/full/132-1326035_lord-venkateswara-swamy-hd.jpg"
                        alt="Second slide"
                        className="coursel-img"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.thousandwonders.net/Tirumala.Venkateswara.Temple.original.3309.jpg"
                        alt="Third slide"
                        className="coursel-img"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default HomeCoursel;