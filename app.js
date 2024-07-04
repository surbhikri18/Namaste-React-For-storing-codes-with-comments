// import React from "react";
// import ReactDOM from "react-dom/client";

// //JSX
// // const heading= ( //heading is called React element (RE is object) & after = (.<h1>..</h1); is JSX expression
// //     <h1 id="title" key="h1" className="head">
// //         React
// //     </h1>//in html use class="head"
// // );
// const Heading= () => ( //Heading is called React component
//     <h1 id="title" key="h1" className="head">
//         React3456
//     </h1>//in html use class="head"
// );
// var xyz=150;
// //React Components - Functional and Class
// //Functional Component is just a normal function which returns jsx
// const HeaderComponent = () =>(
//         <div>
//             {console.log(xyz)} {/* {Heading()}  or <Heading/> */}
//             <h1>Namaste React functional Component</h1>
//             <h2>This is a h2 tag</h2>
//         </div>
// );
//     //all three are same we can write without return also because of arrow fucntion 
// // const HeaderComponent = () =>{
// //     return(
// //         <div>
// //             <h1>Namaste React functional Component</h1>
// //             <h2>This is a h2 tag</h2>
// //         </div>
// //     );
// // }
// // const HeaderComponent = function() { //for homework write this normal functon convention
// //     return(
// //         <div>
// //             <h1>Namaste React functional Component</h1>
// //             <h2>This is a h2 tag</h2>
// //         </div>
// //     );
// // }
// //This is complex structue so we use JSX
// // const container = React.createElement("div", 
// // {
// //     id:"container",
// // }, [React.createElement("h1", 
// // { 
// //     id:"title",
// //     key:"h1",
// // }, "Heading 1"), React.createElement("ul", 
// // {
// //     id:"title",
// //     key:"ul",
// // }, [React.createElement("li", 
// // {
// //     id:"title",
// //     key:"2015",
// // }, "first"),React.createElement("li", 
// // {
// //     id:"title",
// //     key:"2016",
// // }, "second")])]);


// // const heading = React.createElement("h1", 
// // {
// //     id:"title",
// //     key:"h1",
// // }, "Heading 1");
// // const heading2 = React.createElement("h2", 
// // {
// //     id:"title",
// //     key:"h2",
// // }, "Heading 2");
// // const container = React.createElement("div", 
// // {
// //     id:"container",
// // }, [heading, heading2]);
// // console.log(heading);    
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(container);  //for rendering React element
// //for rendering functional component we use
// root.render(<HeaderComponent />);



// //lecture number 4

// import React from "react";
// import ReactDOM from "react-dom/client";

// /**
//     Header
//         -Logo
//         -Nav items or Nav bar on right side
//         -Cart
//     Body
//         -Search bar
//         -RestaurantList(many cards)
//             -Image
//             -Name
//             -Rating
//             -Cuisines
//     Footer
//         -Links
//         -Copyright                      
//  */

// const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6klA6uRAyRNHV2QIwCaDV64EfTbB8G3D4jCARYTgPQQ&s"
//     />
//     </a>
// );

// const Header = () =>{
//     return(
//         <div className="header">
//             <Title /> 
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// // const RestaurantCard = () =>{// but this is a hard coded card we have to make it dynamic
// //     return(
// //         <div className="card">
// //             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
// //             <h2>Pizza Hut</h2>
// //             <h3>Pizza, Doranda</h13>
// //             <h4>4.3 stars</h4>
// //         </div>
// //     )
// // }

// const dominos = {
//     name: "Dominos",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/d0450ce1a6ba19ea60cd724471ed54a8",
//     cuisines: ["Pizzas","Italian"],
//     ratings: "4.5",
// }

// /** The join() method returns an array as a string*/
// //var a = ['Wind', 'Water', 'Fire'];
// // a.join();      // 'Wind,Water,Fire'
// // a.join(', ');  // 'Wind, Water, Fire'
// // a.join(' + '); // 'Wind + Water + Fire'
// // a.join('-');    // 'Wind-Water-Fire'

// const RestaurantCard = () =>{
//     return(
//         <div className="card">
//             <img src= {dominos.image}/>
//             <h2>{dominos.name}</h2>
//             <h3>{dominos.cuisines.join()}</h3>
//             <h4>{dominos.ratings} stars</h4>
//         </div>
//     )
// }

// const Body =() =>{
//     return(
//         <div className="restaurant-list">
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//             <RestaurantCard />
//         </div>
//     )
// }

// const Footer = () =>{
//     return(
//         <h4>Footer</h4>
//     )
// }

// const AppLayout = () =>{
//     return(
//         <>
//             <Header/>
//             <Body/>
//             <Footer/>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);


            
// const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://content3.jdmagicbox.com/comp/ujjain/i2/9999px734.x734.220902165921.e9i2/catalogue/food-villa-freeganj-ujjain-ujjain-fast-food-j7m5i7idmz.jpg"
//     />
//     </a>
//     // <h1 id="title" key="h1" className="head">
//     //     Food Villa
//     // </h1>
// );



// const Body =() =>{
//     return(
//         <h4>Body</h4>
//     )
// }

// const Footer = () =>{
//     return(
//         <h4>Footer</h4>
//     )
// }

// // const styleObj ={
// //     backgroundColor: "red",//not ; bcoz it's an object
// // }

// // // Inline Styling in React
// // const jsx= (
// //     <div style={styleObj}>
// //         <h1>Jsx</h1>
// //         <h1>Second Jsx</h1>
// //     </div>
// // )

// //const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(jsx);

//lecture 5

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
//     />
//     </a>
// );

// const Header = () =>{
//     return(
//         <div className="header">
//             <Title /> 
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// const dominos = {
//     name: "Dominos",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/d0450ce1a6ba19ea60cd724471ed54a8",
//     cuisines: ["Pizzas","Italian"],
//     ratings: "4.5",
// }

// //Config driven UI
// const restaurantList = [
//     {
//         "info": {
//           "id": "199047",
//           "name": "Kailash Pure Veg",
//           "cloudinaryImageId": "l3ghnvpruugvpkvk3iv6",
//           "locality": "Railway Station Road",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "North Indian",
//             "Chinese"
//           ],
//           "avgRating": 4,
//           "parentId": "113576",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "1K+",
//           "sla": {
//             "deliveryTime": 21,
//             "lastMileTravel": 1.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "1.3 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-05-11 23:30:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "₹125 OFF",
//             "subHeader": "ABOVE ₹199",
//             "discountTag": "FLAT DEAL"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/kailash-pure-veg-railway-station-road-deoghar-locality-deoghar-199047",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "871204",
//           "name": "SHAHI DARWAR",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/4159a568-b91d-42b7-89f1-5f3323af2411_871204.jpg",
//           "locality": "Bompas Town",
//           "areaName": "Bompas Town",
//           "costForTwo": "₹150 for two",
//           "cuisines": [
//             "Chinese",
//             "Biryani",
//             "Snacks"
//           ],
//           "avgRating": 4.3,
//           "parentId": "510767",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "8",
//           "sla": {
//             "deliveryTime": 18,
//             "lastMileTravel": 0.7,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "0.7 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-05-11 23:30:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/shahi-darwar-bompas-town-deoghar-871204",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "406448",
//           "name": "Madhuban Hotel",
//           "cloudinaryImageId": "lzqfh4eb4aklaxayil8b",
//           "locality": "Tower Chowk",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "South Indian",
//             "North Indian"
//           ],
//           "avgRating": 3.7,
//           "veg": true,
//           "parentId": "128570",
//           "avgRatingString": "3.7",
//           "totalRatingsString": "100+",
//           "sla": {
//             "deliveryTime": 26,
//             "lastMileTravel": 0.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "0.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-05-11 23:30:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "40% OFF",
//             "subHeader": "UPTO ₹80"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/madhuban-hotel-tower-chowk-deoghar-locality-deoghar-406448",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "816838",
//           "name": "Choco Twist",
//           "cloudinaryImageId": "7884861e69959c4ad9983eeb70726246",
//           "locality": "Bompas Town",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹300 for two",
//           "cuisines": [
//             "Bakery",
//             "Desserts"
//           ],
//           "avgRating": 4.2,
//           "parentId": "486769",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "20+",
//           "sla": {
//             "deliveryTime": 28,
//             "lastMileTravel": 1.3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.3 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextCloseTime": "2024-05-11 23:30:00",
//             "opened": true
//           },
//           "badges": {
            
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "10% OFF",
//             "subHeader": "UPTO ₹40"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/choco-twist-bompas-town-deoghar-locality-deoghar-816838",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "706062",
//           "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
//           "cloudinaryImageId": "909daf097e30cd01d8fd121ddc6de2f6",
//           "locality": "Near ram raj aashram",
//           "areaName": "Bompas Town",
//           "costForTwo": "₹200 for two",
//           "cuisines": [
//             "Ice Cream",
//             "Desserts",
//             "Ice Cream Cakes"
//           ],
//           "avgRating": 4,
//           "veg": true,
//           "parentId": "582",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "100+",
//           "sla": {
//             "deliveryTime": 27,
//             "lastMileTravel": 2.2,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "2.2 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "v1695133679/badges/Pure_Veg111.png",
//                 "description": "pureveg"
//               }
//             ]
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "description": "pureveg",
//                       "imageId": "v1695133679/badges/Pure_Veg111.png"
//                     }
//                   }
//                 ]
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "50% OFF",
//             "subHeader": "UPTO ₹100"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-near-ram-raj-aashram-bompas-town-deoghar-706062",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "198955",
//           "name": "Mayur Restaurant",
//           "cloudinaryImageId": "oev0oqski5ggzsht7agh",
//           "locality": "Jain Mandir Road",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//             "North Indian"
//           ],
//           "avgRating": 4.2,
//           "parentId": "628",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "500+",
//           "sla": {
//             "deliveryTime": 29,
//             "lastMileTravel": 0.7,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "0.7 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
//           },
//           "badges": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/mayur-restaurant-jain-mandir-road-deoghar-locality-deoghar-198955",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "571161",
//           "name": "Masala Magic",
//           "cloudinaryImageId": "ujykvglridvbv9kti941",
//           "locality": "Jamtara Godda Road",
//           "areaName": "Jhoushagari",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "North Indian",
//             "Indian",
//             "Chinese"
//           ],
//           "avgRating": 3.8,
//           "veg": true,
//           "parentId": "301599",
//           "avgRatingString": "3.8",
//           "totalRatingsString": "9",
//           "sla": {
//             "deliveryTime": 28,
//             "lastMileTravel": 1,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25-30 mins",
//             "lastMileTravelString": "1.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
//           },
//           "badges": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "40% OFF",
//             "subHeader": "UPTO ₹80"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/masala-magic-jamtara-godda-road-jhoushagari-deoghar-571161",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "695890",
//           "name": "Cake N Cafe",
//           "cloudinaryImageId": "2a6410f872bd61db913624422048dfcb",
//           "locality": "Nizamat Hussain Road",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Bakery",
//             "Desserts"
//           ],
//           "avgRating": 4.2,
//           "veg": true,
//           "parentId": "54988",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "6",
//           "sla": {
//             "deliveryTime": 19,
//             "lastMileTravel": 0.9,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "0.9 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
//           },
//           "badges": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/cake-n-cafe-nizamat-hussain-road-deoghar-locality-deoghar-695890",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//           "id": "198946",
//           "name": "Naveen Cake Shop",
//           "cloudinaryImageId": "glmkefvga6wu3yy8yshf",
//           "locality": "Shivganga Muhalla",
//           "areaName": "Deoghar Locality",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//             "Desserts"
//           ],
//           "avgRating": 3.8,
//           "veg": true,
//           "parentId": "144792",
//           "avgRatingString": "3.8",
//           "totalRatingsString": "100+",
//           "sla": {
//             "deliveryTime": 16,
//             "lastMileTravel": 0.4,
//             "serviceability": "SERVICEABLE",
//             "slaString": "15-20 mins",
//             "lastMileTravelString": "0.4 km",
//             "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//             "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
//           },
//           "badges": {
            
//           },
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "imageBased": {
                
//               },
//               "textBased": {
                
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "10% OFF",
//             "subHeader": "UPTO ₹40"
//           },
//           "loyaltyDiscoverPresentationInfo": {
//             "logoCtx": {
//               "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
//             },
//             "freedelMessage": "FREE DELIVERY",
//             "badgeType": "BADGE_TYPE_ONE_LITE"
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           }
//         },
//         "analytics": {
//           "context": "seo-data-56522390-8499-4634-8b53-01e4287f47e8"
//         },
//         "cta": {
//           "link": "https://www.swiggy.com/restaurants/naveen-cake-shop-shivganga-muhalla-deoghar-locality-deoghar-198946",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }
// ]

// //Optional Chaining ?.in js read
// // const RestaurantCard = ({restaurant}) =>{
// //     const {name,cloudinaryImageId,cuisines,avgRating} = restaurant.info; //Destructuring obj
// //     return(
// //         <div className="card">
// //             <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}/>
// //             <h2>{name}</h2>
// //             {/* <h3>{cuisines.join()}</h3>  */}
// //             <h4>{avgRating} stars</h4> 
// //         </div>
// //     )
// // }

// const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating}) =>{
//     return(
//         <div className="card">
//             <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}/>
//             <h2>{name}</h2>
//             {/* <h3>{cuisines.join()}</h3>  */}
//             <h4>{avgRating} stars</h4> 
//         </div>
//     )
// }

// // const RestaurantCard = () =>{
// //     return(
// //         <div className="card">
// //             <img src= {dominos.image}/>
// //             <h2>{dominos.name}</h2>
// //             <h3>{dominos.cuisines.join()}</h3>
// //             <h4>{dominos.ratings} stars</h4>
// //         </div>
// //     )
// // }

// <RestaurantCard  {...restaurantList[0].info}/>
// //Props -> properties
// // no key(not accepted bcz otherwise react will rerender everthing so we must use key)<<<<<<<<<<<<<index key(use only if we don't have anything unique)<<<<<<unique key(best practice) 
// const Body =() =>{
//     return(
//         <div className="restaurant-list">
//             {restaurantList.map((restaurant) =>{
//                 return <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//             })}
//             {/* {restaurantList.map((restaurant ,index ) =>{
//                 return <RestaurantCard  {...restaurant.info} key={index}/>
//             })} */}
//             {/* <RestaurantCard  {...restaurantList[0].info}/>
//             <RestaurantCard  {...restaurantList[1].info}/>
//             <RestaurantCard  {...restaurantList[2].info}/>
//             <RestaurantCard  {...restaurantList[3].info}/>
//             <RestaurantCard  {...restaurantList[4].info}/>
//             <RestaurantCard  {...restaurantList[5].info}/>
//             <RestaurantCard  {...restaurantList[6].info}/>
//             <RestaurantCard  {...restaurantList[7].info}/>
//             <RestaurantCard  {...restaurantList[8].info}/> */}

//         </div>
//     )
// }
// // const Body =() =>{
// //     return(
// //         <div className="restaurant-list">
            
// //             <RestaurantCard restaurant = {restaurantList[0]}/>
// //             <RestaurantCard restaurant = {restaurantList[1]}/>
// //             <RestaurantCard restaurant = {restaurantList[2]}/>
// //             <RestaurantCard restaurant = {restaurantList[3]}/>
// //             <RestaurantCard restaurant = {restaurantList[4]}/>
// //             <RestaurantCard restaurant = {restaurantList[5]}/>
// //             <RestaurantCard restaurant = {restaurantList[6]}/>
// //             <RestaurantCard restaurant = {restaurantList[7]}/>
// //             <RestaurantCard restaurant = {restaurantList[8]}/>

// //         </div>
// //     )
// // }

// const Footer = () =>{
//     return(
//         <h4>Footer</h4>
//     )
// }

// const AppLayout = () =>{
//     return(
//         <>
//             <Header/>
//             <Body/>
//             <Footer/>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

//Lecture 6

//first create a src folder then inside put the App.js and change the index.html, src="src/app.js"
//inside src folder create components folder and create Title.js inside components
// In Title.js 
//write
//const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
//     />
//     </a>
// );

// export default Title;//two ways of exporting -this is first way

//In technology, the term "default" refers to the preset or standard configuration, setting, or behavior 
// of a system, software, or device. It's what you get out of the box before making any customizations or changes

//In app.js 
//import Title from "./componenets/Title.js"

//2nd step
//Rename the Title.js to Header.js and put

// const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
//     />
//     </a>
// );
// const Header = () =>{
//     return(
//         <div className="header">
//             <Title />   
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
// export default Header;

//But if we want to export multiple things from same file we 
//can't use export default bcoz it export only one thing

//Another way of exporting is exporting directly
//in previous code we can write
// export const Title= () => ( 
//     <a href="/">
//     <img 
//         className="logo"
//         alt="logo" 
//         src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
//     />
//     </a>
// );

//1st way is called exporting by default 
//2nd is exporting by name
// import {Title} from "./components/Header.js";

// import Header from "./components/Header.js";// Default Import
// import {Title} from "./components/Header.js";//This is called Named Import//This is not obj destructuring
// but has common features like if there are multiple named export then 
//import * as Obj from "./components/Header.js"; 
//and can use Obj.Title and so on in code
//OR if there are two named import then we can write
// import {Title, Header} from "./components/Header.js";

// import Header,{Title} from "./components/Header.js"; also can write this

// import ReactDOM, {createRoot} from "react-dom/client";
//it means somewhere FB developers wrote createRoot as Export 
//by name so we can use it as named import

//export default Header and import Header from "./components/Header.js";
//in imporitng we can rename the file, it is not mandantory to 
//have the same name but same name as it's a good practice
//but can also write
// import NewHeader from "./components/Header.js";
// and use as <NewHeader />

//import Header from "./components/Header"; this is also same
//always use this

//We can rename Header.js as .jsx both can be done bcoz as it
//include jsx and react so we can use any one
//but when we use external lib sometimes file must be .js

//import {Title, Header} from "./components/Header.js";
//or
//import * as XYZ from "./components/Header.js";
//use as <XYZ.Header />
// now we understand why we use 
//<React.Fragment></React.Fragment> bcoz we are importing react
//and by dot oprtr use fragment 

//we can use config or constants file for hard coded data

//. two dots means your file App.css is located just outside folder current folder where you are doing import – 
//if it is in same folder, simply use import ./constants

//Simple Rule 
//Always make ur code cleaner & maintainable

// we can export multiple things from export default by then we have to use hacky things like
//wrapping things in object and then exporting one obj which includes multiple things

//React uses one way data-binding 

//lect 6 continued

// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import {useState} from "react";
// const Body =() =>{
//     const[searchText, setSearchText]= useState("KFC");
//     return(
//         <>
//             <div className="search-bar">
//                 <input type="text" placeholder="Search" value={searchText} 
//                   onChange= { (e)=>{
//                      setSearchText(e.target.value)
//                   }} />
//                 <button>Search - {searchText}</button>
//             </div>
//             <div className="restaurant-list">
//                 {restaurantList.map((restaurant) =>{
//                 return <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//             })}
//         </div>
//         </>
//     ) 
// }
// export default Body;

{/* <button 
   className="search-btn"
   onClick= {()=>{
      const data =restaurants.filter((restaurant)=>
      restaurant.info.name.includes(searchText));
      setRestaurants(data);               
    }}
>
    Search
</button> */}


// import { restaurantList } from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";

// function filterData(searchText, restaurantList){
//     return restaurantList.filter((restaurant)=>
//         restaurant.info.name.includes(searchText)
//     );
// }
// const Body =() =>{
//     const [restaurants, setRestaurants]= useState(restaurantList);
//     const [searchText, setSearchText]= useState("true");
    
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
//                     onClick = {()=> {
//                         const data = filterData(searchText,restaurantList);
//                         setRestaurants(data); 
//                         // if(searchText === "true"){
//                         //     setSearchText("false")
//                         // }else{
//                         //     setSearchText("true");
//                         // }
//                         // console.log(restaurantList)
//                     }}
//                 >
//                     Search
//                 </button>
//                 <h1>{searchText}</h1>
//             </div>
//             <div className="restaurant-list">
//                 {restaurantList.map((restaurant) =>{
//                 return(
//                     <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
//                 );
//             })}
//             </div>
//         </>
//     ) 
// }

// export default Body;