import styles from "./ReviewsCarousel.module.css";
import { useState } from "react";

const details = [
    {
        id: 1,
        content:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        author: "John Doe",
        role: "Youtuber",
        rating: 4.5,
    }
];

export default function ReviewsCarousel() {
   const [currentIndex, setCurrentIndex]=useState(0);

  

    return(
        <div className={`${styles.mainContainer} container`}>
            <div className={`${styles.headerContainer}`}>
                <div >
                    <h1>What customers say about GREENMIND?</h1>
                </div>
                <div>
                    {details.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index)} className={`${styles.carouselDot} ${index === currentIndex ? styles.active : ''}`}></button>
                    ))}
                </div>
            </div>

            <div className={`${styles.reviewsContainer}`}>
                {details.map((detail, index) => (
                    <div key={detail.id}>
                        <p className={`${styles.reviewContent}`}>{detail.content}</p>
                        <div className={`${styles.reviewsFlexContainer}`}>
                            <div className={`${styles.flexAuthor}`}>
                            <h5 className={`${styles.reviewerName}`}>{detail.author}</h5>
                            <p className={`${styles.reviewerRole}`}>{detail.role}</p>
                            </div>
                            <div className={`${styles.flexRating}`}>
                            <h4 className={`${styles.rating}`}>{detail.rating}</h4>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}