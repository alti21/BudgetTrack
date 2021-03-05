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

const initialBudget = {
  description: '',
  type: '+',
  key: 'income',
  value: ''
};

const initialState = {
  incomes: [{}],
  expenses: [{}],
  budgetObj: initialBudget
};

const budgetReducer = (state, action) => {
  switch(action.type) {
    case "CHECK_STATE":
      console.log(state); //just to check state on submit
    case "ON_DESC_CHANGE":
      return {
        ...state,
        budgetObj: {
          ...state.budgetObj,
          description: action.payload
        }
      }
    case "ON_TYPE_CHANGE":
      const isExpense = action.payload === '-';
      return {
        ...state,
        budgetObj: {
          ...state.budgetObj,
          type: action.payload,
          key: isExpense ? 'expense' : 'income'
        }
      }
    case "ON_VALUE_CHANGE":
      return {
        ...state,
        budgetObj: {
          ...state.budgetObj,
          value: action.payload, 
        }
      }
     // const newValue = action.payload;
      //return newValue;
    case 'SUBMIT_BUDGET':
      // I am using spread to clone the object to be safe, might not be 100% neccessary
      const budget = {...state};
      // figure out where to add the current budget object
      const isIncome = budget.budgetObj.type === '+';
      if(budget.budgetObj.description !== '' && budget.budgetObj.value !== '')
      {
        return {
          // here we don't want to concat the whole state into isIncome and isExpense
          incomes: isIncome ? state.incomes.concat(budget.budgetObj) : state.incomes, // maybe add to incomes, setIncomes
          expenses: isIncome ? state.expenses : state.expenses.concat(budget.budgetObj), // maybe add to expenses
          budgetObj: initialBudget, // reset budget object
          // budgetObj: {
          //   description: action.desc,
          //   type: '+',
          //   value: action.value
          // },
          //budgetObj: state.budgetObj.description
          
        }
      }
      else if (budget.budgetObj.description === '') {
        alert("Please enter a description");
        return {
          ...state
        }
      }
      else if (budget.budgetObj.value === '') {
        alert("Please enter a value");
        return {
          ...state
        }
      }
    case "REMOVE_INCOME_ITEM":
      let incomeItems = JSON.parse(localStorage.getItem("income")).incomes;
      incomeItems.splice(action.payload, 1);
      return {
        ...state,
        incomes: incomeItems
      }
    case "REMOVE_EXPENSE_ITEM":
      let expenseItems = JSON.parse(localStorage.getItem("income")).expenses;
      expenseItems.splice(action.payload, 1);
      return {
        ...state,
        expenses: expenseItems
      }
    default:
      return state;
  }
}

// maybe do this: get rid of key below, and make key part of state?
//key can become changed in reducer, in initialstate, key can be 'income'
const useSemiPersistantReducer = (key, initialState) => {
  const [value, dispatch] = React.useReducer(
    budgetReducer,
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState
  );
//put following 3 lines in reducer?
  React.useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, dispatch]) //[inocmes, setIncomes]

  return [value, dispatch];
}

// const removeItem = (key) => {
//   React.useEffect(()=>{
//     localStorage.removeItem(key);
//   }, [key])
// }

const App = () => {

  // const [budget, dispatchBudget] = useReducer( //budget is current state
  //   budgetReducer,
  //   {
  //     allItems: {
  //       exp: [],
  //       inc: []
  //     },
  //     totals: {
  //       exp: 0,
  //       inc: 0
  //     },
  //     budget: 0,
  //     percentage: -1
  //   } //INITIAL STATE
  // );

  // [value, dispatch] setIncomes is a dispatch method, budgets is the state
  //const [budgets, setBudget] = useSemiPersistantReducer('income',initialState);
  //const [expenses, setExpenses] = useSemiPersistentReducer('expense',initialState);
  // incomes will be array of income objects/components

  //const [incomes, setIncomes] = useSemiPersistentState('income',[{}]);
  //const [expenses, setExpenses] = useSemiPersistentState('expense',[{}]);
  //const [description, setDescription] = useState('');
  //const [type, setType] = useState('+');
  //const [value, setValue] = useState('');

  // const budgetObj = {
  //   desc: description,
  //   budgetType: type,
  //   incomeValue: value
  // }

  // const initialbudget = {
  //   desc: '',
  //   budgetType: '+',
  //   incomeValue: ''
  // }

  /*
  const budgetReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_INCOME_ITEM':
        return setIncomes(incomes.concat(budgetObj));
    }
  }
  //maybe: change above several lines to usereducer
  //inside reducer, set income and expense using setIncomes and setExpenses?
  const [budget, dispatchBudget] = useReducer( //reducer, initial state
    budgetReducer,
    initialbudget
  );*/
  
  /*
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
  }*/


  //const handleChange = (event) => {  //this handler is called in the child component BudgetInput
  //  setDescription(event.target.value);
 // }

//   const handleSelectChange = (event) => {  //this handler is called in the child component BudgetInput
//     setType(event.target.value);
//   }

//   const handleValueChange = (event) => {
//     setValue(event.target.value);
//     console.log(budgetObj)
//   }

//   const removeInc = (index) => {
//      let items = JSON.parse(localStorage.getItem("income"));
//      items.splice(index, 1);
//      setIncomes(items);
//   }

//   const removeExp = (index) => {
//     let items = JSON.parse(localStorage.getItem("expense"));
//     items.splice(index, 1);
//     setExpenses(items);
//  }



// [value, dispatch] setIncomes is a dispatch method, budgets is the state
const [budgetState, setBudget] = useSemiPersistantReducer(initialState.budgetObj.key,initialState);
//const [budgetState, setBudget] = useSemiPersistantReducer('expense',initialState);
const {incomes, expenses, budgetObj, key} = budgetState;



//make incomeOutput appear when button in BudgetInput is clicked
  return (
    <div className="App">
<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"></link>
      <div className="top">
        <BudgetOutput />
        
      </div>

      <div className="bottom">
        <BudgetInput 
          descValue={budgetObj.description || ''} //event.target.value
          /*onDescChange={handleChange}*/
          //want to set value of budgetObj.description when Desc changes
          onDescChange={event => setBudget({ type: "ON_DESC_CHANGE", payload: event.target.value })}
          //want to set description onDescChange
          /*onSelectChange={handleSelectChange}*/
          onSelectChange={event => setBudget({ type: "ON_TYPE_CHANGE", payload: event.target.value })}
          type={budgetObj.type || ''}
          /*onBudgetSubmit={handleBudgetObjArray}*/
          onBudgetSubmit={ () => setBudget({ type : 'SUBMIT_BUDGET' }) }
          budgetValue={budgetObj.value || ''}
          /*onValChange={handleValueChange}*/
          onValChange={event => setBudget({ type: "ON_VALUE_CHANGE", payload: event.target.value })}
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
            removeIncome={ (index) => setBudget({ type: "REMOVE_INCOME_ITEM", payload: index })}
          /> 
          <ExpenseOutputList
            list={expenses}
            removeExpense={(index) => setBudget({ type: "REMOVE_EXPENSE_ITEM", payload: index })}
          />
          
        </div>
        
      </div>

    </div>
  )
};


export default App;
