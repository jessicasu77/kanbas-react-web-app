function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div>
            <h3>Implied Return</h3>
            fourtTimesFive = {fourTimesFive}
        </div>
    );
    
}
export default ImpliedReturn;
