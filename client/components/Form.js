import {useEffect, useState} from 'react'
import History from './History'
import {expenseApi} from '../store/expenseApi'

const Form = () => {

  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  // const [transactions, setTransactions] = useState([]);
  const {data, isLoading, isSuccess, isError} = expenseApi.useGetLabelsQuery();
  let Transactions;

  if (isLoading){
    Transactions = `<h1>Data is Fetching...</h1>`
  }else if(isSuccess){
    Transactions = <History transactions= {data} />
  }else if(isError){
    Transactions = `<h1>Error fetching from the API endpoint</h1>`
  }

  const [addTransaction] = expenseApi.useAddTransactionMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!desc || !amount ){
      alert('Please fill out all fields');
      return;
    }
    const newTransaction =  {desc, type, amount};
    console.log(newTransaction);
    await addTransaction(newTransaction).unwrap();
    form.reset();
  }

  //preset default value for category
  useEffect(() => {
    setType(type=> type='Investment');
  }, []);

  return (
    <div className= 'flex flex-col w-11/12 p-5 mx-auto gap-y-5'>
    <h1 className= 'py-4 font-bold text-xl text-center'>Transaction</h1>
    <form id= 'form' onSubmit= {handleSubmit}>
      <div className= 'grid gap-4'>
      <input type= 'text' placeholder= 'Enter a transaction here' className= 'drop-shadow-md rounded-md h-8 px-2 py-4' onChange= {(e)=> setDesc(e.target.value)} ></input>
      <select className= 'rounded-md drop-shadow-md h-8 p-1' onChange= {(e)=> setType(e.target.value)} >
      <option value= 'Investment'>Investment</option>
      <option value= 'Expense'>Expense</option>
      <option value= 'Saving'>Saving</option>
      </select>
      <input type= 'text' placeholder= 'Amount' className= 'drop-shadow-md rounded-md h-8 px-2 py-4' onChange= {(e)=> setAmount(e.target.value)}></input>
      <button type= 'submit' className= 'drop-shadow-md bg-indigo-500 rounded-sm text-white font-semibold py-2'>Make transaction</button>
      </div>
    </form>
    {Transactions}
    </div>
  )
}


export default Form