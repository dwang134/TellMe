import React from 'react'

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
    console.log(category);
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

  return (
    <div className='flex flex-col'>
    <h1 className= 'py-4 text-md font-bold text-lg text-center'>History</h1>
    <div className= 'grid gap-4'>
    {transactions.map((transaction, index)=> 
      <div key= {index} className= 'flex justify-center h-8 border-r-8 rounded-md bg-white drop-shadow-md' style= {{borderColor: colorCategory(transaction.category)}} >
      <button className='px-3'>icon</button>
      <div className= 'block w-full'>{transaction.desc}</div>
      </div>
    )}    
    </div>
    </div>
  )
}

export default History