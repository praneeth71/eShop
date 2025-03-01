import './CheckoutProduct.css';

function CheckoutProduct(){
    return (
       
            <div className='CheckoutProduct'>
               <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww"
                 alt=""className="CheckoutProduct__image" />

                <div className="product__info">
                    <p className='checkoutProduct__title'>RICHSIGN LEATHER ACCESSORIES Full-Grain Natural Leather Ladies Handbags & Shoulder Tote Bags For Women Laptop Big Size Branded Stylish</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>20</strong>    
                    </p>
                    <div className='checkoutProduct__rating'>
                        ⭐⭐
                    </div>
                    <button>Remove from Basket</button>
                </div>
            </div>
      
    )
}

export default CheckoutProduct;
