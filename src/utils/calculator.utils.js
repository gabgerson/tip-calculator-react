// Tip calculator formula
// bill x tip% = tip_amount
//tip_amount + bill = total
//total / numPeople = split

export const getTipAmount = (bill, tip_pecent, split) => {
    const tip_amount = bill * (tip_pecent / 100);
  
    const bill_total = (+bill + +tip_amount);

return [(tip_amount / split).toFixed(2) , (bill_total / split).toFixed(2)]
}