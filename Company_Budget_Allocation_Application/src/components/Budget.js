import React,{useContext, useState} from 'react';
import {AppContext} from "../context/AppContext"
import '../App.css'




const Budget=()=>{
    const { dispatch,remaining,currency,  } = useContext(AppContext);
    const { expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
   const[budget,setBudget]=useState()
   const setTheBudget=(passedVal)=>{
    const updatedBudget=passedVal;
    if(updatedBudget>20000){
        alert("The budget value cannot be greater than 20000")
        setBudget(20000)
<<<<<<< HEAD
        dispatch({
            type: 'SET_BUDGET',
            payload: 20000,
        });
        return
    }

    if(updatedBudget<totalExpenses)
    {
        alert("The budget cannot be less than Spent Money: "+currency+totalExpenses)
=======
    }

    if(totalExpenses>updatedBudget)
    {
        alert("The budget cannot be less than Spent Money: "+currency+totalExpenses)
        setBudget(totalExpenses+remaining)
>>>>>>> 7d4c34b8836ea4cfdc4d7c038c98ca4ca72d5e0b
        return 
    }
    if(updatedBudget<remaining)
    {
        alert("The value cannot be less than Remaining funds: "+currency+remaining)
<<<<<<< HEAD
       return
    }
    else{
    
=======
        setBudget(remaining+totalExpenses)
        return 
    }
    else{
>>>>>>> 7d4c34b8836ea4cfdc4d7c038c98ca4ca72d5e0b
        setBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBudget,
        });
    }

    
}
return (
<div className='alert alert-secondary'>
<div className="budget-div-inner"><span className='span-budget'>Budget{currency}:</span><input
                        required='required'
                        defaultValue={2000}
                        type='number'
                        step={10}
                        id='buget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setTheBudget(event.target.value)}>
                        </input></div>
    
</div>
);
};

export default Budget;