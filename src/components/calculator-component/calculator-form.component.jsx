import { useState } from 'react';
import { getTipAmount } from "../../utils/calculator.utils";
import "./styles.scss"

const defaultFormFields ={
    bill: '',
    tip_percent:'',
    tip_total:'0',
    bill_total:'0',
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
          <label htmlFor="bill">Bill</label>
          <input className="form-input" name="bill" type="number" value={bill} onChange={handleChange} />
          
          <label htmlFor="tip_percent">Tip%</label>
          <input className="form-input" name="tip_percent" type="number" value={tip_percent} onChange={handleChange} />
         
          <label htmlFor="split"># People</label>
          <input className="form-input" name="split" type="number" value={split} onChange={handleChange} />
          
          <button type='submit'>Calculate</button>
        </form>

        <label htmlFor="tip-total"> Tip (per person)</label>
        <div className="result" name="tip-total">${tip_total}</div>
        
        {/* <span>{split}</span> person(s) */}
        <label htmlFor="bill-total">Total (per person) </label>
        <div className="result" name="bill-total">${bill_total}</div>

      </div>

    )
}

export default CalculatorForm