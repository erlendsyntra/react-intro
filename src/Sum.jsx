const Sum = ({ numbers }) => {
  const sum = numbers.reduce((acc, el) => (acc += el), 0);
  return (
    <p>
      The sum of {numbers.join(", ")} is {sum}
    </p>
  );
};
export default Sum;
