import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div>
            <div className='home'>
                <div className='home__container'>
                    <img src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg" 
                         alt = " " className='home__image' />

                         <div className='home__row'>
                            <Product 
                                id="12321341"
                                title="RICHSIGN LEATHER ACCESSORIES Full-Grain Natural Leather Ladies Handbags & Shoulder Tote Bags For Women Laptop Big Size Branded Stylish"
                                price={11.96}
                                rating={5}
                                image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww"
                            />
                            <Product 
                                id="34563456"
                                title="Samsung Galaxy A05 (Light Green, 6GB, 128GB Storage) | 50 MP Main Camera | Upto 12GB RAM with RAM Plus | MediaTek Helio G85 | 5000 mAh Battery"
                                price={56.86}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/81bQaAhgpFL._SX569_.jpg"
                            />
                         </div>

                         <div className='home__row'>
                            <Product 
                                id="23453454"
                                title="Fire-Boltt Dominian 36.3mm (1.43 inch) AMOLED Display, Stainless Steel Design, 466 * 466 px Resolution, Bluetooth Calling, Multiple Sports Modes, Health Mode, IP67, Weather Updates (Gold)"
                                price={89.56}
                                rating={3}
                                image="https://m.media-amazon.com/images/I/717Z1aaECYL._SX569_.jpg"
                            />
                            <Product 
                                id="23424534"
                                title="Trillion Half Zipper Solid Sweatshirt for Men (Pack of 2)"
                                price={23}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/51CRDDG6s4L._SY741_.jpg"
                            />
                            <Product 
                                id="9838982"
                                title="Amkette Optimus BT 4 in 1 Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity with 3 Bluetooth and 1 USB Device, Compact Bluetooth Keyboard, On/Off Switch, Silent Keys, Shortcut Multimedia Keys"
                                price={12.43}
                                rating={2}
                                image="https://m.media-amazon.com/images/I/61UAnJ4pGlL._SY450_.jpg"
                            />
                         </div>

                         <div className='home__row'>
                            <Product 
                                id="9384783"
                                title="JBL Tune 510BT, On Ear Wireless Headphones with Mic, up to 40 Hours Playtime, Pure Bass, Quick Charging, Dual Pairing, Bluetooth 5.0 & Voice Assistant Support for Mobile Phones (Black)"
                                price={32.45}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/61kFL7ywsZS._SY450_.jpg"
                            />
                         </div>
                </div>
            </div>
        </div>
    )
}

export default Home;