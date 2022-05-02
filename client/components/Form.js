import {useState} from 'react'

const Form = () => {

  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [ID, setID]= useState(0);
  const [transactions, setTransactions] = ([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!desc || !amount ){
      alert('Please fill out all fields');
    }
    else if(desc && amount && !category){
      setCategory('Investment');
    }
  
    const newTransaction = {ID, desc, category, amount};
    console.log(newTransaction);
    // setTransactions([...transactions, newTransaction]);
    // setID(ID+1);
    // console.log(transactions);
  }


  return (
    <div className= 'w-96 bg-slate-300 p-5 mx-auto'>
    <div className= 'text-lg font-bold pb-4 text-center'>Transaction</div>
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
    </div>
  )
}

export default Form