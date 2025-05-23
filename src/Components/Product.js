import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, image, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                title: title
            },
        });
    };

    return (
        <div>
            <div className='product'>
                <div className='product__info'>
                    <p>{title}</p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__rating'>
                     {Array(rating).fill().map((_,i) => <span>⭐</span>)}

                    </div>
                </div>
                <img src={image} />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;