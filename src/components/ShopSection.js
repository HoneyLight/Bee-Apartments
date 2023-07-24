import "./ShopSection.css"
import { IoLocationOutline, IoStarOutline, IoBedOutline } from "react-icons/io5";
import { TbResize } from "react-icons/tb";
import a1 from "./image/a1.jpg";
import a2 from "./image/a2.jpg";
import a3 from "./image/a3.jpg";
import land from "./image/land.jpeg";
import bath from "./image/bath.png";
import bed from "./image/bed.png";
import mod from "./image/mod.jpg";
import { Link } from "react-router-dom";
function ShopSection() {
    return (
        <div className="shopsection"><br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className="our-choice-h1">Our choice of <br />
                popular real estate</h1>

            <div className='shop-property'>
                <Link to="/Property" className="shop-link">
                    <div className="shop-property-row">
                        <img src={a1} alt="" />
                        <h5 className="sell">Sell</h5>
                        <h5 className="wishlist"><IoStarOutline /></h5>
                        <p><IoLocationOutline />APARTMENTS - Queens</p>
                        <h2>White Stylish Loft</h2>
                        <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                        <h4>____________________________________________________</h4>
                        <div className="shop-icons">
                            <div><h3>$555,000</h3></div>
                            <div className="resize-container"><TbResize className="resize-icon" />   <span>250m2</span></div>
                            <div><img src={bed} alt="bed" />    <span>3</span></div>
                            <div><img src={bath} alt="bath" />   <span>4</span></div>
                        </div>
                    </div>
                </Link>
                <div className="shop-property-row">
                    <img src={a2} alt="" />
                    <h5 className="sell">Sell</h5>
                    <h5 className="wishlist"><IoStarOutline /></h5>
                    <p><IoLocationOutline />APARTMENTS - Queens</p>
                    <h2>White Stylish Loft</h2>
                    <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                    <h4>____________________________________________________</h4>
                    <div className="shop-icons">
                        <div><h3>$555,000</h3></div>
                        <div className="resize-container"><TbResize className="resize-icon" />   <span>250m2</span></div>
                        <div><img src={bed} alt="bed" />    <span>3</span></div>
                        <div><img src={bath} alt="bath" />   <span>4</span></div>
                    </div>
                </div>
                <div className="shop-property-row">
                    <img src={a3} alt="" />
                    <h5 className="sell">Sell</h5>
                    <h5 className="wishlist"><IoStarOutline /></h5>
                    <p><IoLocationOutline />APARTMENTS - Queens</p>
                    <h2>White Stylish Loft</h2>
                    <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                    <h4>____________________________________________________</h4>
                    <div className="shop-icons">
                        <div><h3>$555,000</h3></div>
                        <div className="resize-container"><TbResize className="resize-icon" />  <span>250m2</span></div>
                        <div><img src={bed} alt="bed" />    <span>3</span></div>
                        <div><img src={bath} alt="bath" />   <span>4</span></div>
                    </div>
                </div>
                <div className="shop-property-row">
                    <img src={a1} alt="" />
                    <h5 className="sell">Sell</h5>
                    <h5 className="wishlist"><IoStarOutline /></h5>
                    <p><IoLocationOutline />APARTMENTS - Queens</p>
                    <h2>White Stylish Loft</h2>
                    <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                    <h4>____________________________________________________</h4>
                    <div className="shop-icons">
                        <div><h3>$555,000</h3></div>
                        <div className="resize-container"><TbResize className="resize-icon" />   <span>250m2</span></div>
                        <div><img src={bed} alt="bed" />    <span>3</span></div>
                        <div><img src={bath} alt="bath" />   <span>4</span></div>
                    </div>
                </div>
                <div className="shop-property-row">
                    <img src={a2} alt="" />
                    <h5 className="sell">Sell</h5>
                    <h5 className="wishlist"><IoStarOutline /></h5>
                    <p><IoLocationOutline />APARTMENTS - Queens</p>
                    <h2>White Stylish Loft</h2>
                    <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                    <h4>____________________________________________________</h4>
                    <div className="shop-icons">
                        <div><h3>$555,000</h3></div>
                        <div className="resize-container"><TbResize className="resize-icon" />   <span>250m2</span></div>
                        <div><img src={bed} alt="bed" />    <span>3</span></div>
                        <div><img src={bath} alt="bath" />   <span>4</span></div>
                    </div>
                </div>
                <div className="shop-property-row">
                    <img src={a3} alt="" />
                    <h5 className="sell">Sell</h5>
                    <h5 className="wishlist"><IoStarOutline /></h5>
                    <p><IoLocationOutline />APARTMENTS - Queens</p>
                    <h2>White Stylish Loft</h2>
                    <p>White palette and sleek design, creating a sophisticated and inviting contemporary living space.</p>
                    <h4>____________________________________________________</h4>
                    <div className="shop-icons">
                        <div><h3>$555,000</h3></div>
                        <div className="resize-container"><TbResize className="resize-icon" />   <span>250m2</span></div>
                        <div><img src={bed} alt="bed" />    <span>3</span></div>
                        <div><img src={bath} alt="bath" />   <span>4</span></div>
                    </div>
                </div>


            </div><br /><br />
            <div className="browse-more-properties"><br /><br /><br /><br />
                <button>Browse More Properties</button><br /><br /><br /><br />
                <div className="modern-spaces-container">

                    <div className="colum1">
                        <div className="background-colour"></div>
                        <div><img src={mod} alt="mod" /></div>
                    </div>
                    <div className="colum2">
                        <h1>Modern spaces and <br />premium design</h1><br />
                        <p>Lorem ipsum dolor sit amet, minimum inimicus quo no, at vix primis viderere vituperatoribus. In corpora argumentum.</p><br />

                        <p>– Mea omnium explicari</p>
                        <p>– His no legere feugaitoer</p>
                        <p>– illum idquem</p><br />

                        <button>Search Property</button>


                    </div>


                </div>













            </div>

        </div>
    )
}

export default ShopSection;