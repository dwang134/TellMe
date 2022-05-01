import React from 'react'




const Labels = ({category}) => {

  return (
    <div>
        <div className= 'flex justify-between'>
            <div className= 'flex gap-x-2'>
            <div className= 'w-2 h-2 rounded py-3' style= {{background: category.color ?? 'rgb(255, 99, 132)'}}></div>
            <div className= 'text-md text-black'>{category.type ?? ""}</div>
            </div>
            <h3>{category.percent ?? 0}%</h3>
        </div>
    </div>
  )
}

export default Labels