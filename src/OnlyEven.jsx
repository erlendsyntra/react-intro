const OnlyEven = ({ numbers }) => {
  const evenNums = numbers.filter((el) => el % 2 == 0);
  return (
    <p>
      The even numbers in {numbers.join(", ")} are: {evenNums.join(" - ")}
    </p>
  );
};

export default OnlyEven;
