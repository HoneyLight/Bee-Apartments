import Sidebar from "./Sidebar";
import apa1 from "./img/Apartment1.avif";
import apa2 from "./img/Apartment2.avif";
import apa3 from "./img/Apartment3.avif";
import mo1 from "./img/mo1.webp";
import mo2 from "./img/mo2.webp";
import mo3 from "./img/mo3.avif";
import town1 from "./img/town1.webp";
import town2 from "./img/town2.avif";
import town3 from "./img/town3.webp";
import sky1 from "./img/sky1.avif";
import sky2 from "./img/sky2.webp";
import sky3 from "./img/sky3.webp";
import s1 from "./img/school1.avif";
import s2 from "./img/school2.avif";
import s3 from "./img/school3.avif";
import con1 from "./img/con1.webp";
import con2 from "./img/con2.webp";
import con3 from "./img/con3.webp";
import fac1 from "./img/fac1.webp";
import fac2 from "./img/fac2.webp";
import fac3 from "./img/fac3.avif";
import r1 from "./img/r2.avif";
import r2 from "./img/res2.avif";
import r3 from "./img/d4.avif";
import Btn from "./Btn";

function Viewpro() {
    const viewProperty = (id) => {
        fetch(`http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=false`)
    }

    return (
        <div>
            <Sidebar />
            <main className="page">
                <div className="re-destination">
                    <h1>Apartment</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={apa1} alt="" />
                            </div>
                            <h2>URBAN LIFE, New YORK</h2>
                            <p>$682,900</p>
                            <h3>Apartment * 4beds * 114m2</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={apa2} alt="" />
                            </div>
                            <h2>LUX DESIGN, NEW YORK</h2>
                            <p>$345,259</p>
                            <h3>Apartment * 3beds * 98m2</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={apa3} alt="" />
                            </div>
                            <h2>URBAN LIFE, CHICAGO</h2>
                            <p>$480,200</p>
                            <h3>Apartment * 4beds * 150m2</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                    </div>
                    <h1>Modular Building</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={mo1} alt="" />
                            </div>
                            <h2>Nearly New 75 Modular Building </h2>
                            <p>£62,500</p>
                            <h3>m2 Double Storey Building</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={mo2} alt="" />
                            </div>
                            <h2>Refurbished Modular Buildings</h2>
                            <p>47m2</p>
                            <h3>£59,895</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={mo3} alt="" />
                            </div>
                            <h2>Anti-Vandal Modular Building</h2>
                            <p>47m2</p>
                            <h3>£245.00</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>

                    </div>

                    <h1>Town House</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={town1} alt="" />
                            </div>
                            <h2>6 Bedroom Double storey Building</h2>
                            <p>Land Size 200m2</p>
                            <h3>$200,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={town2} alt="" />
                            </div>
                            <h2>4 Bedroom Double storey Building</h2>
                            <p>Land size 175m2</p>
                            <h3>$100,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={town3} alt="" />
                            </div>
                            <h2>6 Bedroom Double Storey Building</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$500,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>

                    </div>

                    <h1>Skyscrappers</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={sky1} alt="" />
                            </div>
                            <h2>6 Bedroom hundred storey Building</h2>
                            <p>Land Size 20000m2</p>
                            <h3>$10,00,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={sky2} alt="" />
                            </div>
                            <h2>8 Bedroom hundred storey Building</h2>
                            <p>Land size 175m2</p>
                            <h3>$10,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={sky3} alt="" />
                            </div>
                            <h2>6 Bedroom hundred Storey Building</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$50,000,000</h3>
                            <div className="inner-btn">
                                <Btn title="Edit" bgColor="white" color="#C835D" width="25%" mgl="4%" />
                                <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                            </div>
                        </div>
                    </div>

                    <h1>School Buildings</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={s1} alt="" />
                            </div>
                            <h2> Double Storey Building Kids school</h2>
                            <p>Land Size 20000m2</p>
                            <h3>$10,00,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={s2} alt="" />
                            </div>
                            <h2>Double Storey Building University</h2>
                            <p>Land size 175m2</p>
                            <h3>$10,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={s3} alt="" />
                            </div>
                            <h2>Double Storey Building High School</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$50,000,000</h3>
                            <div className="inner-btn">
                                <Btn title="Edit" bgColor="white" color="#C835D" width="25%" mgl="4%" />
                                <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                            </div>
                        </div>
                    </div>

                    <h1>Condonimium</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={con1} alt="" />
                            </div>
                            <h2>8 Bedroom hundred storey Building</h2>
                            <p>Land Size 20000m2</p>
                            <h3>$10,00,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={con2} alt="" />
                            </div>
                            <h2>6 Bedroom hundred storey Building</h2>
                            <p>Land size 175m2</p>
                            <h3>$10,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={con3} alt="" />
                            </div>
                            <h2>4 Bedroom hundred Storey Building</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$50,000,000</h3>
                            <div className="inner-btn">
                                <Btn title="Edit" bgColor="white" color="#C835D" width="25%" mgl="4%" />
                                <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                            </div>
                        </div>
                    </div>

                    <h1>Factory</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={fac1} alt="" />
                            </div>
                            <h2>Well builed factory Building</h2>
                            <p>Land Size 20000m2</p>
                            <h3>$10,00,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={fac2} alt="" />
                            </div>
                            <h2>Plastic Factory Building</h2>
                            <p>Land size 175m2</p>
                            <h3>$10,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={fac3} alt="" />
                            </div>
                            <h2>Rubber Factory</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$50,000,000</h3>
                            <div className="inner-btn">
                                <Btn title="Edit" bgColor="white" color="#C835D" width="25%" mgl="4%" />
                                <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                            </div>
                        </div>
                    </div>

                    <h1>Residential Building</h1>
                    <div className="main-destination">
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={r1} alt="" />
                            </div>
                            <h2>6 Bedroom hundred storey Building</h2>
                            <p>Land Size 20000m2</p>
                            <h3>$10,00,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={r2} alt="" />
                            </div>
                            <h2>8 Bedroom hundred storey Building</h2>
                            <p>Land size 175m2</p>
                            <h3>$10,000,000</h3>
                            <Btn title="Edit" bgColor="white" color="#AC835D " width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />
                        </div>
                        <div className="inner-destination">
                            <div className="main-image">
                                <img src={r3} alt="" />
                            </div>
                            <h2>6 Bedroom hundred Storey Building</h2>
                            <p>Land Size 1050m2</p>
                            <h3>$50,000,000</h3>

                            <Btn title="Edit" bgColor="white" color="#C835D" width="25%" mgl="4%" />
                            <Btn title="Delete" bgColor="#AC835D " color="white" width="25%" mgl="4%" />

                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Viewpro;