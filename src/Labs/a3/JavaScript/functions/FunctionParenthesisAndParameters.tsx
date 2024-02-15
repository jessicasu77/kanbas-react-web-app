function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h1>Parenthesis and parameters</h1>
            twoSquared = {twoSquared}
            square(2) = {twoSquared}
            threePlusOne = {threePlusOne}
            plusOne(3) = {threePlusOne}
        </>
    )
}
export default FunctionParenthesisAndParameters;