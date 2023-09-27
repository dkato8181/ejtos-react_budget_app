import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        let value = event.target.value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }
    return (
        <div className='alert alert-success'>
            <div class="form-group row">
                <label class="col-4" for="currency">Currency</label>
                <select id="currency" className="form-control m-0 col" onChange={handleCurrencyChange} >
                    <option value='$'>$ Dollar</option>
                    <option value='£'>£ Pound</option>
                    <option value='€'>€ Euro</option>
                    <option value='&#8377;'>&#8377; Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;