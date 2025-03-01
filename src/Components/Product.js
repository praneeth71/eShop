import './Product.css';

function Product(props) {
    return (
        <div>
            <div className='product'>
                <div className='product__info'>
                    <p>{props.title}</p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className='product__rating'>
                     {Array(props.rating).fill().map((_, i) => <span>⭐</span>)}

                    </div>
                </div>
                <img src={props.image} />
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;