import React, { useState } from "react";
import "./styles.css";

var foodShelf = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍓": "Strawberry",
  "🥥": "Coconut",
  "🥝": "Kiwi",
  "🍒": "cherries",
  "🌽": "Corn",
  "🍄": "Mushroom",
  "🥑": "Avocado",
  "🍋": "Lemon"
};

var foodWeKnow = Object.keys(foodShelf);

export default function App() {
  var [meaning, setMeaning] = useState(""); //setting up a variable with useState

  function foodInputHandler(event) {
    //function that updates output state on change in text box
    var userInput = event.target.value;
    meaning = foodShelf[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our dataset. Sorry.";
    }
    setMeaning(meaning); //updating meaning value
  }
  function foodClickHandler(item) {
    //return console.log(item);
    meaning = foodShelf[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Food Smasher <span role="img">👊</span>
      </h1>
      <input
        className="inputField"
        placeHolder="Search a food item"
        onChange={foodInputHandler}
        style={{
          padding: "1rem",
          margin: "0.5rem auto 2rem",
          width: "80%",
          border: "2px solid #f29191",
          outline: "none",
          borderRadius: "25px"
        }}
      />
      <br />
      <span
        style={{
          display: "inline-block",
          color: "#f29191",
          margin: "1rem auto",
          padding: "1rem",
          fontSize: "3rem",
          backgroundColor: "hsla(0, 25%, 95%,0.1)",
          borderRadius: "15px",
          overflow: "hidden"
        }}
      >
        {meaning}
      </span>
      <h3>Food List: </h3>
      <p style={{ color: "hsla(0, 52%, 55%,0.8)" }}>
        Click on a food item to identify it
      </p>
      <ul>
        {foodWeKnow.map(function (item) {
          //return console.log(item);
          return (
            <li
              key={item}
              onClick={() => foodClickHandler(item)}
              style={{
                listStyleType: "none",
                padding: "1rem",
                margin: "1rem",
                display: "inline-block",
                fontSize: "2rem",
                cursor: "pointer",
                backgroundColor: "hsla(0, 25%, 95%,0.3)",
                borderRadius: "5px"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
