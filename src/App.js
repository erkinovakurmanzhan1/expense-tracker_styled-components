import { useState } from 'react';
import styled from "styled-components";
import './App.css'
import { Expenses } from './components/expenses/Expenses';
import { NewExpenses } from './components/new-expense/NewExpenses';


const DUMMY_EXPENSES =[
  {
    id:'e2',
    title:'New TV',
    price: 799.49,
    date:new Date(2021,5,12),
  },
  {
    id:'e3',
    title:'Car Insurance',
    price: 247.67,
    date:new Date(2021,2,11),
  },
  {
    id:'e4',
    title:'New Desk(Wooden)',
    price: 450,
    date:new Date(2022,8,2),
  },
]

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)


const addNewExpenseHandler = (data)=>{
  const upwardExpenses = [...expenses]
  upwardExpenses.push(data)
setExpenses(upwardExpenses)

}

  return ( <AppStyled>
    <ItemS>
     <NewExpenses onNewExpenseAdd={addNewExpenseHandler}/>
     <Expenses expenses={expenses}/>
    </ItemS>
    </AppStyled>
  );
}


export default App;


const AppStyled = styled.div`
display: flex;
  justify-content: center;
  background-color:  #3F3F3F;
  width: 100%;
  height: 100%;
`

const ItemS= styled.div`
 text-align: center;
width: 780px;
`