import React from 'react'

const Form = () => {
  return (
    <div className= 'mx-auto w-90'>
    <div className= 'text-lg font-bold pb-4'>Transaction</div>
    <form id = 'form'>
      <div className= 'grid gap-4'>
      <div className= 'input-group'>
        <input type= 'text' placeholder= 'Salaray, House, SIP' className= 'form-input'></input>
      </div>
      <select className= 'form-input'>
        <option value= 'Investment'></div>
      </select>
      </div>
    </form>
    </div>
  )
}

export default Form