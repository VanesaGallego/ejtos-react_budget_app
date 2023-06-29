import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if(budget > 20000) {
        alert("The value cannot exceed 20,000");
        setBudget("");
        return;
    }

    if (budget < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending");
        setBudget("");
        return;
    }

    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    };

    return (
        <div className='alert alert-secondary'> 
            Budget: {currency}
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                min='0'
                max='20000'
                step='10'
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
