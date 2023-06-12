import React from 'react'
import styles from "../styles.module.css"
import { Carousel } from 'react-carousel-minimal';

function Slider() {
  const data = [
     {
       image: require("../images/projects/vending-machine.png"),
       caption: "Vending Machine"
     },
     {
       image: require("../images/projects/google-drive-download.png"),
       caption: "Google Drive Download"
     },
     {
       image: require("../images/projects/palindrome.png"),
       caption: "Palindrome Checker"
     },
     {
       image: require("../images/projects/tic-tac-toe.png"),
       caption: "Tic Tac Toe"
     },
     {
       image: require("../images/projects/todo-list.png"),
       caption: "Todo List"
     },
     {
       image: require("../images/projects/first-portfolio.png"),
       caption: "First Portoflio"
     }
   ];

   const captionStyle = {
     fontSize: '2em',
     fontWeight: 'bold',
   }
   const slideNumberStyle = {
     fontSize: '15px',
     fontWeight: 'bold',
   }
   return (
     <div>
       <div className={styles.carousecontent}>
         <h1>Projects</h1>
         <div className={styles.carouselinner}>
           <Carousel
             data={data}
             time={5000}
             width="850px"
             height="500px"
             captionStyle={captionStyle}
             radius="10px"
             slideNumber={true}
             slideNumberStyle={slideNumberStyle}
             captionPosition="bottom"
             automatic={true}
             dots={true}
             pauseIconColor="blue"
             pauseIconSize="40px"
             slideBackgroundColor="darkgrey"
             slideImageFit="fit"
             thumbnails={true}
             thumbnailWidth="100px"

           />
         </div>
       </div>
     </div>
   );
 }

export default Slider
