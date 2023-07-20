
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    if(totalExpenses>budget){
        alert("Total expense cannot be greater than budget"+currency+budget)
    }
    else{
        return (
            <div className="alert alert-success">
            <span>Remaining:{currency}{budget-totalExpenses}</span>
        </div>

            );
      
        
    }
   };


export default Remaining;