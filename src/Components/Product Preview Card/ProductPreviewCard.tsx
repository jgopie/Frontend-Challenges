import ProductPreviewCardData from "../../data/Product Preview Card/ProductPreviewCard";
import './ProductPreviewCard.css';

const ProductPreviewCard = () => {
    const data = ProductPreviewCardData[0];
    const priceDisplay = (price: number, discount?:number) => {
        if (!discount){
            return(
                <p>{price}</p>
            );
        }   

        return <p className="price">${price - discount}   <span className="originalPrice">${price}</span></p>
    }
    return (
        <div className="imageContainer">
            <img src={data.mobileImageUrl} alt="Mobile Image" className="displayImage"/>
            <div className="textContainer">
                <h1 className="type">{data.type}</h1>
                <h2 className="name">{data.name}</h2>
                <p className="description">{data.description}</p>
                {priceDisplay(data.price, data.discountAmount)}
                <button type="button" className="cartButton">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPreviewCard;