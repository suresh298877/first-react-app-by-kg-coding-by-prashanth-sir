import { useSelector } from "react-redux";

const BagSummary = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);

    const CONVENIENCE_FEES = 99;
    let totalItem = bagItems.length;
    let totalMRP = 0;
    let tatalDiscount = 0;

    const finalIems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });

    finalIems.forEach((bagItem)=>{
        totalMRP+=bagItem.original_price;
        tatalDiscount+=bagItem.original_price-bagItem.current_price;
    });



    
    let finalPayment = totalMRP - tatalDiscount + CONVENIENCE_FEES;
    return <div className="bag-summary">
        <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
            <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-₹{tatalDiscount}</span>
            </div>
            <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹{finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
        </button>
    </div>
}
export default BagSummary;