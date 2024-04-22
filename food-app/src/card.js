import React from 'react'
import "./card.css"


const food = [{ name: "Masala Dosa", description: "Crispy rice and lentil crepe filled with spiced potatoes.", url: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ name: "Poha", description: "Flattened rice flakes cooked with onions, potatoes, and spices.", url: "https://images.pexels.com/photos/13063292/pexels-photo-13063292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
{ name: "Idli", description: "Steamed rice cakes made from fermented rice and lentil batter.", url: "https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }]


function Card_list() {
    return (
        <div className='parent'>
            {food.map((data) => {
                const { name, description, url } = data;
                return (
                    <Card name={name} desc={description} url={url} />
                )
            })}
        </div>
    )
}

const Card = (props) => {
    return (
        <div className='container'>
            <img src={props.url} alt="unavailble to load image" />
            <h3>{props.name}</h3>
            <span>😋😋😋😋😋</span>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card_list;
