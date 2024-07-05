import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";


const RestaurantMenu = () => {
    //used to read dynamic url params
    const params = useParams();
    const {resId} =params;

    const[restaurant,setRestaurant] = useState(null);
    const[resMenu,setResMenu] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return (!restaurant)? <Shimmer/> : (
        <div className="menu">
            <div>
                {/* path: "/restaurant/:id", id should be same with this id 
                <h1>Restaurant: {resId}</h1> */}
                {/* <h1>Restaurant: {restaurant.id}</h1>  */}
                {/* after destructuring */}
                <h1>Restaurant id: {restaurant.id}</h1> 
                <br></br>
                <h2>{restaurant.name}</h2>
                <img src= {IMG_CDN_URL+restaurant.cloudinaryImageId}/>
                <h3>{restaurant.areaName}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} stars</h3>
                <h3>{restaurant.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <br></br>
                <ul>
                    {   (!resMenu)? <h3>Menu Coming Soon...</h3> :
                        Object.values(resMenu)?.map((menu) =>{
                            return (
                                <li key={menu.card.info.id}>{menu.card.info.name}</li>
                            );
                    })}
                    
                </ul>
                {console.log(restaurant)}
                {console.log(resMenu)}
            </div>
        </div>
    )
}

export default RestaurantMenu;
