import React from 'react';

import './ExpensesItem.css'

const ExpenseItem = ({date,title,price}) => {
    return (
        
        <div className='box-expense_item'>
            
            <p className='date'>{date.toString()}</p>
            <p className='title'>{title}</p>
            <p className='price'>${price}</p>
            
        </div>
    );
};

export default ExpenseItem;