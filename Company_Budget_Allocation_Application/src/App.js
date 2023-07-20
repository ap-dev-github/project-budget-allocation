import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList'
import ExpenseItem  from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm'
import Currency  from './components/Currency'
import './App.css'



import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
               
                <h1 className='mt-3' style={{textAlign:'center'}}>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
               
                        <div className='col-sm'>
                        <Budget/>
                        </div>
            

                        <div className='col-sm'>
                        <Remaining />
                    </div>        

                        <div className='col-sm'>
                        <ExpenseTotal />
                    </div> 
                    <div className='col-sm'>
                        <Currency />
                    </div>   
                   
               
                  
                      
                        <h2>Allocation</h2>
                       <div>
                        <div className='col-sm'>
                        <ExpenseList />
                    </div>         

                        <div className='col-sm'>
                        <ExpenseItem/>
                    </div>
                    </div>
                    <h2>Change Allocation</h2>   

                        <div className='col-sm'>
                        <AllocationForm />
                    </div> 
                         
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
