import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const AllocationForm = (props) => {
    const { dispatch,remaining,currency  } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
    
            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    return (
        <div>
            <div className='row'>
            <div className="input-group mb-3" >
                <div className="container">
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>



                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="Human Resource" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                  </select>



                    <div className="input-group-prepend" >
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>


                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                  </div>
                     

                  <div className="allocation-currency-outerdiv">
                  <div className="currency-span">{currency}
                 <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}>
                        </input></div>
                        </div>
                    <button className="btn btn-outline-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                    
                </div>
                </div>
        </div>
    );
};
export default AllocationForm;
