//componets
import Labels from './Labels'
//third-party
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
// import {config} from '../data/data'
Chart.register(ArcElement);
// import {getExpense} from '../store/expenseApi'
import {expenseApi} from '../store/expenseApi'
import {getLabels, chartData, getTotal} from '../helper/helper'

const Graph = () => {
    // console.log(data);
    const {data, isLoading, isSuccess, isError} = expenseApi.useGetLabelsQuery();
    let Transactions;

    if (isLoading){
      Transactions = `<h1>Data is Fetching...</h1>`
    }else if(isSuccess){
      // console.log(data);
      const transaction = getLabels(data, 'type');
      Transactions = transaction.map((category, index)=> <Labels key= {index} category= {category}></Labels>)
    }else if(isError){
      Transactions = `<h1>Error fetching from the API endpoint</h1>`
    }

  return (
      <div className="flex justify-center items-center mx-auto w-11/12 p-10">
        <div className="item">
          <div className="relative">
            <Doughnut {...chartData(data)}></Doughnut>
            <div className="absolute top-1/3 right-0 bottom-0 left-0 mx-auto">
              <p className="font-bold text-lg text-white text-center pt-5">
                Total
              </p>
              <p className="block text-3xl text-emerald-500 text-center">${getTotal(data)}</p>
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