
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div >
            <span> <div className='alert alert-warning'>
            <span>Spent so far: {currency}{totalExpenses} </span>
        </div></span>
        </div>
    );
};
export default ExpenseTotal;