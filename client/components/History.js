import React from 'react'
import {BiTrash} from 'react-icons/bi'

const History = ({transactions}) => {
  const expenseCategory = [
    {
        type: 'Savings',
        color: 'rgb(255, 99, 132)',
        percent: 45
    },
    {
        type: 'Investment',
        color: 'rgb(54, 162, 235)',
        percent: 20
    },
    {
        type: 'Expense',
        color: 'rgb(255, 205, 86)',
        percent: 10
    },
  ]

  const colorCategory = (category) => {

    let color = ''
    switch (category){
      case 'Investment':
        color = 'rgb(255, 99, 132)';
        break;
      case 'Spendings':
        color = 'rgb(54, 162, 235)';
        break;
      case 'Savings':
        color = 'rgb(255, 205, 86)';
        break;
    }
    return color;
  }

  const handleDelete = () => {
  }

  return (
    <div className='flex flex-col'>
    <h1 className= 'py-4 font-bold text-lg text-center'>History</h1>
    <div className= 'grid gap-4'>
    {
      (transactions=== undefined || transactions.length == 0) ? <h1 className= 'text-md text-center text-black'>No history</h1> :
      transactions.map((transaction, index)=> 
      <div key= {index} className= 'flex justify-center items-center h-8 rounded-md bg-white drop-shadow-md'>
      <button className='w-3/12 px-3' onClick= {handleDelete}><BiTrash style= {{color: colorCategory(transaction.category), fontSize: 'large' }}></BiTrash></button>
      <div className= 'w-full h-fit bg-blue-200 text-center'>{transaction.desc}</div>
      <div className= 'w-3/12 h-8 border-r-8 rounded' style= {{borderColor: colorCategory(transaction.category)}}></div>
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