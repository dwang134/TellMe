import React from 'react'
import {BiTrash} from 'react-icons/bi'
import {expenseApi} from '../store/expenseApi'

const History = ({transactions}) => {
  
  const [deleteTransaction] = expenseApi.useDeleteTransactionMutation();

  const handleDelete = (e) => {
    console.log(e.target.dataset.id);
    deleteTransaction({ _id : e.target.dataset.id });
  }
  // console.log(transactions);

  return (
    <div className='flex flex-col'>
    <h1 className= 'py-4 font-bold text-lg text-center'>History</h1>
    <div className= 'grid gap-4'>
    {
      (transactions=== undefined || transactions.length == 0) ? <h1 className= 'text-md text-center text-black'>No history</h1> :
      transactions.map((transaction, index)=> 
      <div key= {index} className= 'flex justify-center items-center h-8 rounded-md bg-white drop-shadow-md'>
      <BiTrash data-id= {transaction.id} className='w-2/12 px-3 text-lg' onClick= {handleDelete} style= {{color: transaction.color}}></BiTrash>
      <div className= 'w-full h-fit bg-blue-200 text-center'>{transaction.desc}</div>
      <div className= 'w-2/12 h-8 border-r-8 rounded' style= {{borderColor: transaction.color}}></div>
      </div>
    )}    
    </div>
    </div>
  )
}

//error handle --> this is why ts is useful
// History.propTypes= {
//   desc: PropTypes.string,
//   category: PropTypes.string,
//   amount: PropTypes.number,
// }

export default History