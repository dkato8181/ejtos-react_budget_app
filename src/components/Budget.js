import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let value = event.target.value;
        if ((parseInt(value)-parseInt(totalExpenses))<0) {
            alert("You  cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(value);
        dispatch({
                    type: 'SET_BUDGET',
                    payload: value,
                });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
