import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const About = () => {
    const [quotes, setQuote]=useState([])

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(r => r.json())
        .then(data => setQuote(data) )
    }, [])
    let count = quotes.slice(1550)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let newArr = []

    count.forEach(quote => {
        newArr.push(`${quote.text} By: ${quote.author}`)
    })

    let randText1 = newArr[getRandomInt(9)]
    let randText2 = newArr[getRandomInt(9)]
    let randText3 = newArr[getRandomInt(9)]
    let randText4 = newArr[getRandomInt(9)]

    return (
        <div>
             <Carousel>
                <Carousel.Item>
                    <h1>{randText1}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText2}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText3}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText4}</h1>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default About