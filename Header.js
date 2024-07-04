const Title= () => ( 
    <a href="/">
    <img 
        className="logo"
        alt="logo" 
        src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
    />
    </a>
);

const Header = () =>{
    return(
        <div className="header">
            <Title />   
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;

// const Header = () =>{
//     let title="Food Villa"; 

//     return(
//         <div className="header">
//             <Title />   

//             <h1>{title}</h1>
//             <button onClick={()=>(title="New Title")}>Change title</button>
//            ......
// }
//It won't change the title bcoz local variable is not synced 
//with UI for that we have to create local state variable using
//useState react hook

// import {useState} from "react";
 
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
//     const [title, setTitle]= useState("Food Villa");
 
//     return(
//         <div className="header">
//             <Title />    

//             <h1>{title}</h1>
//             <button onClick={()=>(setTitle("New Food App"))}>Change title</button>

//             <div className="nav-items">
//                 <ul> 
//                     <li>Home</li>
//                      <li>About</li>
//                     <li>Contact</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Header;

//lecture 8





