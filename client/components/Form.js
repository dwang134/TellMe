import {useEffect, useState} from 'react'
import History from './History'

const Form = () => {

  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [ID, setID]= useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!desc || !amount ){
      alert('Please fill out all fields');
      return;
    }
    const newTransaction = {ID, desc, category, amount};
    setTransactions([...transactions, newTransaction]);
    setID(ID+1);
  }

  useEffect(() => {
    setCategory(category=> category='Investment');
  }, []);

  return (
    <div className= 'flex flex-col w-11/12 bg-slate-300 p-5 mx-auto gap-y-5'>
    <h1 className= 'py-4 font-bold text-xl text-center'>Transaction</h1>
    <form id= 'form' onSubmit= {handleSubmit}>
      <div className= 'grid gap-4'>
      <input type= 'text' placeholder= 'Enter a transaction here' className= 'drop-shadow-md rounded-md h-8 px-2 py-4' onChange= {(e)=> setDesc(e.target.value)} ></input>
      <select className= 'rounded-md drop-shadow-md h-8 p-1' onChange= {(e)=> setCategory(e.target.value)} >
      <option value= 'Investment'>Investment</option>
      <option value= 'Spendings'>Spendings</option>
      <option value= 'Savings'>Savings</option>
      </select>
      <input type= 'text' placeholder= 'Amount' className= 'drop-shadow-md rounded-md h-8 px-2 py-4' onChange= {(e)=> setAmount(e.target.value)}></input>
      <button type= 'submit' className= 'drop-shadow-md bg-indigo-500 rounded-sm text-white font-semibold py-2'>Make transaction</button>
      </div>
    </form>
    <History transactions= {transactions}></History>
    </div>
  )
}


export default Form