import React, { useContext } from "react";
import AppContext from '../context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const Currency=()=>{
   const {dispatch}=useContext(AppContext);
const changeCurrency=(passedValue
     )=>{
  dispatch({
    type:'CHG_CURRENCY',
    payload:passedValue
        
  })
}

return (


  <div className="alert alert-success"> Currency {
    <select name="Currency" id="Currency" className="currency-heading" onChange={event=>changeCurrency(event.target.value)}>
      <option value="£" className="currency-option">(£)Pound</option>
      <option value="₹" className="currency-option">(₹)Rupee</option>
      <option value="€" className="currency-option">(€)Euro</option>
      <option value="$" className="currency-option">($)Dollar</option>
    </select>	


    }	
  </div>
 
);
}

export default Currency;