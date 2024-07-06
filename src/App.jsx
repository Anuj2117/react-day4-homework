import Kalkiposter from "./assets/Kalki.jpg";
import Prabhas from "./assets/KalkiSide.jpg";
import MirzapurPoster from "./assets/Mirzapur.jpg";
import Kalinbhaiya from "./assets/Mirzapurside.jpg";
import MoviePoster from './Movie-Poster';
import './App.css'

function App() {
   const firstCard={
    name:"Kalki",
    images:{
      img1:Kalkiposter,
      img2:Prabhas
    },
    yearandhero:"2024 , Amithab Bacchan ",
    duration:"200 min",
    type:"Spritual , Action ",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat optio est distinctio natus explicabo nostrum facere, hic voluptates quos"
    }
   const SceondCard={
    name:"Mirzapur-3",
    images:{
      img1:MirzapurPoster,
      img2:Kalinbhaiya
    },
    yearandhero:"2024 , Tripathi ji ",
    duration:"200 min",
    type:"Action , Drama ",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat optio est distinctio natus explicabo nostrum facere, hic voluptates quos"
    }
  return (
    <>
      <MoviePoster information={firstCard}/>
      <MoviePoster information={SceondCard}/>
    </>
  )
}

export default App
