import React, { useState, useReducer } from 'react';
import './App.css';
import BudgetInput from './components/input/BudgetInput';
import BudgetOutput from './components/output/BudgetOutput';
import IncomeOutputList from './components/output/IncomeOutputList';
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
  const [description, setDescription] = useState('');
  const [type, setType] = useState('+');
  const [value, setValue] = useState('');

  const incomeObj = {
    desc: description,
    budgetType: type,
    incomeValue: value
  }

  const handleIncomeObjArray = () => {
    // const incomes = this.state.players.slice(0);

    // incomes.push({
    //   name: 'Maul',
    //   id: 26
    // });
  
    // this.setState({
    //   players: players,
    // });
    setIncomes(incomes.concat(incomeObj));
    console.log(incomes + "testing");
  }

  const handleChange = (event) => {  //this handler is called in the child component BudgetInput
    setDescription(event.target.value);
  }

  const handleSelectChange = (event) => {  //this handler is called in the child component BudgetInput
    setType(event.target.value);
  }

  const handleValueChange = (event) => {
    setValue(event.target.value);
    console.log(incomeObj)
  }

//make incomeOutput appear when button in BudgetInput is clicked
  return (
    <div className="App">

      <div className="top">
        <BudgetOutput />
        
      </div>

      <div className="bottom">
        <BudgetInput 
          descValue={description}
          onDescChange={handleChange}
          onSelectChange={handleSelectChange}
          type={type}
          onBudgetSubmit={handleIncomeObjArray}
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

        <IncomeOutputList 
          list={incomes}
        /> 
      </div>

    </div>
  )
};


export default App;
