import styles from "./Categories.module.css";
import plantImg1 from "/images/plant-img1-categories.png";
import plantImg2 from "/images/plant-img2-categories.png";
import plantImg3 from "/images/plant-img3-categories.png";

export default function Categories() {
    return(
        <div className={`${styles.mainContainer}`}>
            <h1>Categories</h1>
            <p>Find what you are looking for</p>
            <div className={`${styles.mainContainerBody} container-fluid `}>
                    <div className={`${styles.content} `}>
                        <img src={plantImg1} alt="plant-img1" />
                        <h2>Natural Plants</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${styles.content} `}>
                        <img src={plantImg2} alt="plant-img2" />
                        <h2>Plant Accessories</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Explore</button>
                    </div>
                    <div className={`${styles.content} `}>
                        <img src={plantImg3} alt="plant-img3" />
                        <h2>Artificial Plants</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
            </div>
        </div>
    )
}