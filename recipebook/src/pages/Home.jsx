import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "../components/MealItem";
import ReacipeIndex from "../components/RecipeIndex";
import Footer from "../components/Footer";
import MyNav from "../components/MyNav";

const Home = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
      
        <div className="main">

            
            <MyNav />
            
            <div className="heading">
                <h4>“I don’t know what it is about food your mother makes for you, especially when it’s something that anyone can make – pancakes, meat loaf, tuna salad – but it carries a certain taste of memory.” -Mitch Albom</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>

            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
            </div>
           <Footer />
        </div>
    </>
)
}
export default Home;