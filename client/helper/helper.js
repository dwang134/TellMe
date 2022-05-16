import _, { map } from 'lodash';

export const getTotal = (transactions) => {
    return _.sum(getSum(transactions)); 
}

export const getSum = (transactions, type) => {
    //group by type 
    let sum = _(transactions).groupBy('type').map((transaction, key)=> {
        if (!type) return _.sumBy(transaction, 'amount')
        return {
            'type': key,
            'color': transaction[0].color,
            'total': _.sumBy(transaction, 'amount')
        }
    }).value()
    return sum;
}


export const getLabels = (transactions) => {
    let amountSum = getSum(transactions, 'type');
    let totalAmount = _.sum(getSum(transactions));
    let percent = _(amountSum).map(category=> _.assign(category, {percent: (100* category.total/ totalAmount)})).value();
    return percent;

}

export const chartData = (transactions, customConfig) => {

    let dataTotals = getSum(transactions);
    let bgColor = _.map(transactions, transaction=> transaction.color);
    bgColor = _.uniq(bgColor);
    let delayed;

    const config = {
        data: {
        datasets: [{
          label: 'My First Dataset',
          data: dataTotals,
          backgroundColor: bgColor,
          hoverOffset: 4,
          borderRadius: 5,

        }]
      },
      options: {
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        cutout: 120
      }
    };

    return customConfig ? customConfig : config;
}