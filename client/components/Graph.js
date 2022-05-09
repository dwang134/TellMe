//componets
import Labels from './Labels'
//third-party
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import {config} from '../data/data'
Chart.register(ArcElement);
// import {getExpense} from '../store/expenseApi'
import {useGetLabelsQuery} from '../store/expenseApi'

// const expenseCategory = [
//   {
//       type: 'Savings',
//       color: 'rgb(255, 99, 132)',
//       percent: 45
//   },
//   {
//       type: 'Investment',
//       color: 'rgb(54, 162, 235)',
//       percent: 20
//   },
//   {
//       type: 'Expense',
//       color: 'rgb(255, 205, 86)',
//       percent: 10
//   },
// ]

const Graph = () => {
    // console.log(data);
    const {data, isLoading, isSuccess, isError} = useGetLabelsQuery();
    let Transactions;

    if (isLoading){
      Transactions = `<h1>Data is Fetching...</h1>`
    }else if(isSuccess){
      Transactions = data.map((category, index)=> <Labels key= {index} category= {category}></Labels>)
    }else if(isError){
      Transactions = `<h1>Error fetching from the API endpoint</h1>`
    }

    console.log(data);

  return (
      <div className="flex justify-center items-center mx-auto bg-blue-300 w-11/12 p-10">
        <div className="item">
          <div className="relative">
            <Doughnut {...config}></Doughnut>
            <div className="absolute top-1/3 right-0 bottom-0 left-0 mx-auto">
              <p className="font-bold text-lg text-white text-center pt-5">
                Total
              </p>
              <p className="block text-3xl text-emerald-500 text-center">${0}</p>
            </div>
          </div>
          <div className="flex flex-col py-10 gap-4">
            {Transactions}
          </div>
        </div>
      </div>
  );
}

export default Graph