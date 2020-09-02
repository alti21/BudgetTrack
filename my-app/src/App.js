import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import BudgetInput from './components/input/BudgetInput';
import IncomeOutput from './components/output/IncomeOutput';

// initial state
const data = {
  allItems: {
      exp: [],
      inc: []
  },
  totals: {
      exp: 0,
      inc: 0
  },
  budget: 0,
  percentage: -1
};



    

     const calcPercentage = (totalIncome) =>
        {
            if(totalIncome > 0)
            {
                this.percentage = Math.round((this.value / totalIncome) * 100);
            }
            else 
            {
                this.percentage = -1;
            }
        }

      const getPercentage = () =>
        {
            return this.percentage;
        }

    


const budgetReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_INCOME_ITEM':
      return { //USE PAYLOAD
        ...state, 
        allItems: action.payload
      }
  }
}


const addItem = (type, des, val) => {
  let newItem, ID;
  //select last id in array
  //create new ID
  if(data.allItems[type].length > 0)
  {
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
  }
  else // if no income or expenses
  {
      ID = 0;
  }

  //create new item based on 'inc' or 'exp' type
  if(type === 'exp')
  {
      //newItem = new Expense(ID, des, val); //click to make new component?
     // newItem = {ID: ID, des: des, val: val};
  }
  else if (type === 'inc')
  {
     // newItem = new Income(ID, des, val);
  }
  
  //push it into our data structure
  data.allItems[type].push(newItem);

  //return the new element
  return newItem;
}




const App = () => {

  const [budget, dispatchBudget] = useReducer( //budget is current state
    budgetReducer,
    {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    } //INITIAL STATE
  );

  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setDescription(event.target.value);
  }

  return (
    <div className="App">
      test
      <BudgetInput 
        descValue={description}
        onDescChange={handleChange}
       // budgetValue={}
      />

      <IncomeOutput 
        description={description}
      />
    </div>
  )
};


export default App;
