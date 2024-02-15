import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf((item.id)) >= 0;
    const dispatch = useDispatch();

    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
    }
    
    const handleRemoveFromBag = () => {
        dispatch(bagActions.removeFromBag(item.id));
    }

    return <div className="item-container">
        <img className="item-image" src={"../" + item.image} alt="item image" />
        {/* <img className="item-image" src={`../../public/${item.image}`} alt="item image" /> */}
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        { elementFound ? <button onClick={handleRemoveFromBag} type="button" class="btn-add-bag btn btn-danger"><RiDeleteBin2Fill /> Remove from Bag</button>
        :
        <button type="button" onClick={handleAddToBag} class="btn-add-bag btn btn-success"><MdAddCircleOutline /> Add to Bag</button>}
        
        
    </div>
}

export default HomeItem;