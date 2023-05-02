describe('Submit form for the bill, tip amount', () => {
    it('should reset input values after submitting', () => {
        billAmtInput.value = 100
        tipAmtInput.value = 100
        submitPaymentInfo();
        expect(billAmtInput.value).toEqual("");
        expect(tipAmtInput.value).toEqual("");
    })
})

it('should return undefined with negative or empty inputs', () => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    expect(createCurPayment()).toEqual(undefined);
})

it('should create a table row element', () => {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    appendPaymentTable(createCurPayment());
    expect(paymentTbody.children.length).toEqual(1);

})