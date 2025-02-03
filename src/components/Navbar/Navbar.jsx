import styles from "./Navbar.module.css";
import cartIcon from "/images/Cart.png";
import personIcon from "/images/Person.png";
import filterRight from "/images/FilterRight.png";

export default function Navbar() {
    return (
        <>
            <nav className={`${styles.navbar} container`}>
                <a href="/" className={styles.logoNavbar}>Greenmind</a>
                <ul>
                    <li><a href="/Home" className={styles.navNavbar}>Home</a></li>
                    <li><a href="/Products" className={styles.navNavbar}>Products</a></li>
                    <li><a href="/Contacts" className={styles.navNavbar}>Contacts</a></li>
                </ul>
                <div className={styles.actionsNavbar}>
                    <a href="/cart"><img src={cartIcon} alt="cart-img" /></a>
                    <a href="/account"><img src={personIcon} alt="account-img" /></a>
                    <a href="/slide"><img src={filterRight} alt="slide" /></a>
                </div>
            </nav>
        </>
    );
}
