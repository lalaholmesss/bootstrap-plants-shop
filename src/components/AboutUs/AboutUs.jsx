import styles from "./AboutUs.module.css"
import potImg from "/images/pot-image.png";
import boxImg from "/images/box-image.png";
import callImg from "/images/call-image.png";

export default function AboutUs() {
    return(
        <div className={`${styles.mainContainer} container`}>
            <div className={`${styles.aboutUsContainer} d-flex`}>
                <h3 className={`font-weight-bold`}>About us</h3>
                <p>Order now and appreciate the beauty of nature</p>
            </div>
            <div className={`${styles.servicesContainer} row`}>
                <div className={`col`}>
                    <img src={potImg} alt="pot-img" />
                    <h4>Large Assortment</h4>
                    <p>we offer many different types of products with fewer variations in each category.</p>
                </div>
                <div className={` col`}>
                    <img src={boxImg} alt="box-img" />
                    <h4>Fast & Free Shipping</h4>
                    <p>4-day or less delivery time, free shipping and an expedited delivery option.</p>
                </div>
                <div className={` col`}>
                    <img src={callImg} alt="call-img" />
                    <h4>24/7 Support</h4>
                    <p>answers to any business related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </div>
    )
}