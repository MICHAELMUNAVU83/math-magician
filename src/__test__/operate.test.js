import operate from "../logic/operate";

it('add 2' , ()=>{
    expect(operate(1,5,'+')).toBe('6')
})