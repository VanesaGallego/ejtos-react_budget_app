import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    if(budget > 20000) {
        alert("The value cannot exceed 20,000");
        setBudget("0");
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
