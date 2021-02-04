import React, { useState, useReducer } from 'react';
import './App.css';
import BudgetInput from './components/input/BudgetInput';
import BudgetOutput from './components/output/BudgetOutput';
import IncomeOutputList from './components/output/IncomeOutputList';
import ExpenseOutputList from './components/output/ExpenseOutputList';

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


const useSemiPersistentState = (key, initialState) => {
 // console.log(JSON.parse(localStorage.getItem(key)));
  const [value, setValue] = React.useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState
  );
  
  React.useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue];
};

// const removeItem = (key) => {
//   React.useEffect(()=>{
//     localStorage.removeItem(key);
//   }, [key])
// }

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

  //const [incomes, setIncomes] = useState([{}]); // incomes will be array of income objects/components
  const [incomes, setIncomes] = useSemiPersistentState('income',[{}]);
  const [expenses, setExpenses] = useSemiPersistentState('expense',[{}]);
  const [description, setDescription] = useState('');
  const [type, setType] = useState('+');
  const [value, setValue] = useState('');

  const budgetObj = {
    desc: description,
    budgetType: type,
    incomeValue: value
  }

  const handleBudgetObjArray = () => {
    // const incomes = this.state.players.slice(0);

    // incomes.push({
    //   name: 'Maul',
    //   id: 26
    // });
  
    // this.setState({
    //   players: players,
    // });

    if(budgetObj.budgetType === '+') {
      setIncomes(incomes.concat(budgetObj));
    }
    else if(budgetObj.budgetType === '-') {
      setExpenses(expenses.concat(budgetObj));
    }

    console.log(incomes);
    console.log(expenses);
  }

  const handleChange = (event) => {  //this handler is called in the child component BudgetInput
    setDescription(event.target.value);
  }

  const handleSelectChange = (event) => {  //this handler is called in the child component BudgetInput
    setType(event.target.value);
  }

  const handleValueChange = (event) => {
    setValue(event.target.value);
    console.log(budgetObj)
  }

  const removeInc = (index) => {
     let items = JSON.parse(localStorage.getItem("income"));
     items.splice(index, 1);
     setIncomes(items);
  }

  const removeExp = (index) => {
    let items = JSON.parse(localStorage.getItem("expense"));
    items.splice(index, 1);
    setExpenses(items);
 }

//make incomeOutput appear when button in BudgetInput is clicked
  return (
    <div className="App">
<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"></link>
      <div className="top">
        <BudgetOutput />
        
      </div>

      <div className="bottom">
        <BudgetInput 
          descValue={description}
          onDescChange={handleChange}
          onSelectChange={handleSelectChange}
          type={type}
          onBudgetSubmit={handleBudgetObjArray}
          budgetValue={value}
          onValChange={handleValueChange}
        />

        {/* <IncomeOutput 
          obj={incomeObj}
        /> */}

        {/* <IncomeOutput 
          desc={description}
          type={type}
        /> */}
        <div className="container clearfix">
          <IncomeOutputList 
            list={incomes}
            removeIncome={(index)=>removeInc(index)}
          /> 
          <ExpenseOutputList
            list={expenses}
            removeExpense={(index)=>removeExp(index)}
          />
          
        </div>
        
      </div>

    </div>
  )
};


export default App;
