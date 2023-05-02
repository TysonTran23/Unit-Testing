describe('Shift Summary, including the total of bills, tips, and tip percent average', function () {
    it('It should sum all the bill payments and give us a total', function () {
         allPayments = {
            payment1: { billAmt: 50 },
            payment2: { billAmt: 20 },
            payment3: { billAmt: 30 },
        }
        expect(sumPaymentTotal("billAmt")).toEqual(100);
    })
})
    it('It should sum all the tipAmt payments and give us a total', function () {
         allPayments = {
            payment1: { tipAmt: 5 },
            payment2: { tipAmt: 3 },
            payment3: { tipAmt: 3 },
        }
        expect(sumPaymentTotal("tipAmt")).toEqual(11);
    })

describe('Converting the bill and tip amount into a percent', () => {
    it('should take the bill and tip amount and convert it into a percent', () => {
        allPayments = {
            payment1: {billAmt: 50, tipAmt: 10,}
        }
        expect(calculateTipPercent(50, 10)).toEqual(20)
    })
})

describe('Table', () => {
    it('should add a piece of data to the tr', () => {
    let newTr = document.createElement('tr');
    appendTd(newTr, "Hello");
    expect(newTr.children.length).toEqual(1);
    })
})