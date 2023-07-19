import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

import { FaTimesCircle } from 'react-icons/fa';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation=(name)=>{
        const expense={
            name:name,
            cost:10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload:expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        
        <td><button className="increase-alloc-button" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className="decrease-alloc-button" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><FaTimesCircle size='2.0em' color="red" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};
export default ExpenseItem;
