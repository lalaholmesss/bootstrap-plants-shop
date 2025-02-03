import styles from "./Header.module.css";
import searchIcon from "/images/search-header.png";
import rectangleImg from "/images/rectangle-header.png";
import plantImg from "/images/plant1-header.png";

export default function Header() {

    return(
        <div className={`${styles.mainContainer} container `}>
            <div className={`${styles.infoContainer} row`}>
                <div>
                    <div className={`row`}>
                        <div className={`col-5`}>
                            <h1>Buy your dream plants</h1>
                        </div>
                    </div>
                    <div className={`${styles.numsInfo} row`}>
                        <div className={`${styles.numsCol1} col-2 `}>
                            <p className={`${styles.nums}`}>50+</p>
                            <p>Plant Species</p>
                        </div>
                        <div className={`${styles.numsCol2} col-2`}>
                            <p className={`${styles.nums}`}>100+</p>
                            <p>Customers</p>
                        </div>
                    </div>                    
                </div>
                <div className={`row`}>
                    <div className={`${styles.inputContainer} col`}>
                        <input type="text" placeholder="What are you looking for?"/>
                        <img className={`${styles.searchIcon}`} src={searchIcon} alt="search-icon" />
                    </div>
                </div>
            </div>
            <div className={`${styles.imageContainer}`}>
                <div className={`${styles.images}`}>
                    <img className={`${styles.imageRectangle}`} src={rectangleImg} alt="rectangle-img" />
                    <img className={`${styles.imagePlant}`} src={plantImg} alt="plant-img" />
                </div>
            </div>
        
        </div>
    )
}
