import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        // dispatch( { type : "INCREMENT" } );
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        // dispatch( { type : "DECREMENT" } );
        dispatch(counterActions.decrement());
    };

    const handleAdd = () => {
        // dispatch( { type : "Add", payload : { num : inputElement.current.value } } );
        dispatch( counterActions.add(inputElement.current.value) );
        inputElement.current.value=""
        
    }

    const handleSubtract = () => {
        // dispatch( { type : "Subtract", payload : {num : inputElement.current.value } } );
        dispatch( counterActions.subtract(inputElement.current.value) );
        inputElement.current.value=""
    }

    const handlePrivacy = () => {
        // dispatch( { type : "toggle"} )
        dispatch( privacyActions.toggle() );
    }

    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
            <button onClick={handleDecrement} type="button" className="btn btn-success">-1</button>
            <button onClick={handlePrivacy} type="button" className="btn btn-warning">privacy toggle</button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center random">
            <input ref={inputElement} type="text" placeholder="Enter number" />
            <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
            <button onClick={handleSubtract} type="button" className="btn btn-danger">subtract</button>
        </div>
    </>
}

export default Controls;