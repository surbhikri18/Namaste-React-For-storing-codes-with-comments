import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// function filterData(searchText, restaurantList){
//     return restaurantList.filter((restaurant)=>
//         restaurant.info.name.includes(searchText)
//     );
// }
function filterData(searchText, restaurants) {
    console.log(searchText, restaurants)
    const filterData = restaurantList.filter((restaurant) =>
       restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())

      //restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log(filterData)

    return filterData;
    
  }
const Body =() =>{
    const [restaurants, setRestaurants]= useState(restaurantList);
    const [searchText, setSearchText]= useState("");
    console.log(restaurants)
   
    return(
        <>
            <div className="search-container">
                <input
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchText, restaurants);
                        
                        // update the state - restaurants
                        setRestaurants(data);
                        console.log(restaurants)

                        // if(searchText==="true")
                        //     setSearchText("false")
                        // else
                        //     setSearchText("true")
                    }}
                >
                    Search
                </button>
                <h1>{searchText}</h1>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) =>{
                return(
                    <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
                );
            })}
            </div>
        </>
    ) 
}

export default Body;

//lect 8

// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";

// function filterData(searchText, restaurants) {
//     //bcoz this will rerender restaurants and again if we search then it will not go back
//     // const filterData = restaurants  .filter((restaurant) =>
//     // restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//     // );
//     const filterData = restaurantList.filter((restaurant) =>
//        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return filterData; 
// }

// const Body =() =>{
//     const [restaurants, setRestaurants]= useState(restaurantList);
//     const [searchText, setSearchText]= useState("");
     
//     return(
//         <>
//             <div className="search-container">
//                 <input
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search" 
//                     value={searchText} 
//                     onChange={(e)=>{
//                         setSearchText(e.target.value);
//                     }}
//                 />
//                 <button 
//                     className="search-btn"
//                     onClick={() => {
//                         //need to filter the data
//                         const data = filterData(searchText, restaurants);
                        
//                         // update the state - restaurants
//                         setRestaurants(data);
//                     }}
//                 >
//                     Search
//                 </button>
//                 <h1>{searchText}</h1>
//             </div>
//             <div className="restaurant-list">
//                 {restaurants.map((restaurant) =>{
//                 return(
//                     <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//                 );
//             })}
//             </div>
//         </>
//     ) 
// }

// export default Body;


//lec 8

// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";

// function filterData(searchText, newRestaurants) {
//     const filterData = newRestaurants.filter((restaurant) =>
//        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//     );


//     return filterData; 
// }

// const Body =() =>{
//     const [newRestaurants, setNewRestaurants]= useState(restaurantList);
//     const [searchText, setSearchText]= useState("");

//     useEffect(()=>{
//         //API Call
//        getRestaurants();    
//     },[]);

//     async function getRestaurants(){
//         //use bangalore swiggy data
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//         const json= await data.json();
//         console.log(json); 
//         //optional chaining
//         setNewRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
//     }

//     console.log("render");

    // useEffect(()=>{
    //     console.log("call when depedency is changed");
    // },[restaurants]);
     
//     return(
//         <>
//             <div className="search-container">
//                 <input
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search" 
//                     value={searchText} 
//                     onChange={(e)=>{
//                         setSearchText(e.target.value);
//                     }}
//                 />
//                 <button 
//                     className="search-btn"
//                     onClick={() => {
//                         //need to filter the data
//                         const data = filterData(searchText, newRestaurants);
                        
//                         // update the state - restaurants
//                         setNewRestaurants(data);
//                     }}
//                 >
//                     Search
//                 </button>
//                 <h1>{searchText}</h1>
//             </div>
//             <div className="restaurant-list">
//                 {newRestaurants?.map((restaurant) =>{
//                 return(
//                     <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//                 );
//             })}
//             </div>
//         </>
//     ) 
// }

// export default Body;

//updated lect 8 continued

// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
 
// function filterData(searchText, allRestaurants) {
//     const filterData = allRestaurants.filter((restaurant) =>
//        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
//     );


//     return filterData; 
// }

// const Body =() =>{
//     const [allRestaurants, setAllRestaurants]= useState([]);
//     const [searchText, setSearchText]= useState("");
//     const [filteredRestaurants, setFilteredRestaurants]= useState([]);

//     useEffect(()=>{
//         //API Call
//        getRestaurants();    
//     },[]);

//     async function getRestaurants(){
//         //use bangalore swiggy data
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//         const json= await data.json();
//         console.log(json); 
//         //optional chaining
//         setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//         setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     }

//     console.log("render");

//     //Everything inside React is Component

//     //Conditonal rendering
//     //if restaurant is empty => shimmer UI
//     //if restaurant has data => actual data UI

//     //A shimmer Ul resembles the page's actual UI, so users will understand how quickly the web or mobile 
//     //app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) 
//     //when a page full of content/data takes more than 3-5 seconds to load.
     
//     //We are using allRestaurants.length==0 instead of filteredRestaurants.length==0 bcoz we want to show shimmer ui or effect if there is no allRestaurants data
//     //kyunki filteredRestaurants.length==0 likhne pr agr hum kuch search krnge jo allRestauants mei nhi h toh filteredRestaurant ka
//     // value 0 ho jayega aur phir bhi Shimmer loading show krega

//     //optional chaining

//     // The optional chaining operator (?.) enables you to 
//     // read the value of a property located deep within a 
//     // chain of connected objects without having to 
//     // check that each reference in the chain is valid.

//     // The ?. operator is like the . chaining operator, 
//     // except that instead of causing an error if a reference 
//     // is nullish (null or undefined), the expression returns 
//     // a value of undefined. 

//     //We can't write in  as we can write only js expressions
//     // here not js statements
//     //   {
//     //    // these two are js statements
//     //   a=10; 
//     //   console.log(a)
//     // if else is also a statement but ternary operator is expression
//     // }

//     // but we can do only
//     //  {
//     //   console.log() //this is now js expression
//     //    // also
//     //   ((a=10), console.log(a))
//     // } 

//     // Diff algo is writte inside React core library 
//     //not in react-dom and dom update is happened by react-dom
//     //Read about jsx with curly braces

//     //not render component (Early return)
//     if(!allRestaurants) return null;
//     // if(!allRestaurants) return <h1>No data</h1>;

//     return (allRestaurants?.length == 0) ? <Shimmer /> :  (
//         <>
//             <div className="search-container">
//                 <input
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search for restaurants and foods" 
//                     value={searchText} 
//                     onChange={(e)=>{
//                         setSearchText(e.target.value);
//                     }}
//                 />
//                 <button 
//                     className="search-btn"
//                     onClick={() => {
//                         //need to filter the data
//                         const data = filterData(searchText, allRestaurants);
                        
//                         // update the state - restaurants
//                         setFilteredRestaurants(data);
                        
//                     }}
//                 >
//                     Search
//                 </button>
//                 {/* <h1>{searchText}</h1> */}
//             </div>
//             <div className="restaurant-list">
//                 { (filteredRestaurants?.length == 0)? <h1>No result match your filter!!</h1> :
//                 filteredRestaurants?.map((restaurant) =>{
//                     return (
//                         <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//                     );
//                 })}
//             </div>
            
//         </>
//     )  
// }

// export default Body;