//componets
import Labels from './Labels'

//third-party
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement} from 'chart.js'
import {config} from '../data/data'
Chart.register(ArcElement);

const Graph = () => {
    // console.log(data);
  return (
    <div className="flex justify-content mx-auto bg-blue-300">
      <div className="item">
        <div className="relative">
          <Doughnut {...config}></Doughnut>
          <div className="absolute top-1/3 right-0 bottom-0 left-0 mx-auto">
            <p className="font-bold text-lg text-white text-center pt-5">
              Total
            </p>
            <p className="block text-3xl text-emerald-400 text-center">${0}</p>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels></Labels>
        </div>
      </div>
    </div>
  );
}

export default Graph