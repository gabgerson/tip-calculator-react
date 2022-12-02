import { useState } from 'react';
import { getTipAmount } from "../utils/calculator.utils";

const defaultFormFields ={
    bill: '',
    tip_percent:'',
    tip_total:'',
    bill_total:'',
    split:'1'

}
const CalculatorForm = () => {
    const[formFields, setFormFields] = useState(defaultFormFields);
    
    const {bill, tip_percent, tip_total, bill_total, split} = formFields
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(bill ,"i am bill")
    const [t_total, bill_total]  = getTipAmount(bill, tip_percent, split)
    console.log(t_total, "i am total")
    setFormFields({ ...formFields, tip_total: t_total, bill_total})
    console.log(defaultFormFields)
    }

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name , "name")
        console.log(value, "val")
        
        setFormFields({ ...formFields, [name]: value})

      
    }

    return (
      <div className="calculator-form-container">
        <h1>TIP CALCULATOR</h1>
        <form onSubmit={handleSubmit}>

          Bill <input name="bill" type="number" value={bill} onChange={handleChange} />
  
          Tip<input name="tip_percent" type="number" value={tip_percent} onChange={handleChange} />
           Num of People <input name="split" type="number" value={split} onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
        Tip/ per <span>{split}</span> person(s)
        <div name="total">{tip_total}</div>
        
        Bill Total/ per <span>{split}</span> person(s)
        <div name="total">{bill_total}</div>

      </div>

    )
}

export default CalculatorForm