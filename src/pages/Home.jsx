// import { use } from "react";
import { BsDisplay } from "react-icons/bs";
import Star from "../components/Star";
import '../index.css'
import { useState, useEffect } from "react";
import ShirtSwitcher from "../components/ShirtSwitcher";
// import style from '../styles/Home.modules.css'
export default function Home() {

  const [rating, setRating] = useState(5)
  // const [rateColor, setColor] = useState(null)
  useEffect(() => {
     console.log("current rating", rating)

    }, [rating])
    return (
      <>


      <h1> Welcome to the Shopping Website</h1>

      <ShirtSwitcher></ShirtSwitcher>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1

        return (
          <>


          <div key={index}>

            <label>

              <input class="stars"type="radio" name="rate"
                value={currentRate}
                 checked={rating === currentRate} // Ensures the correct radio button is checked
                onChange={() => { setRating(currentRate); console.log(index); }} // Updates the rating state when clicked


              />

              <Star size={50}
                color={(currentRate <= rating) ? "yellow" : "grey"}
              />

            </label>

          </div>
          </>

        )
      })}
    </>
  )

}