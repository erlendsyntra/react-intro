import Naam from "./Naam";
import Sum from "./Sum";
import FullName from "./FullName";
import OnlyEven from "./OnlyEven";
import MyParagraph from "./MyParagraph";
import "./myCss.css";

const App = () => {
  return (
    <>
      <h1>Opdrachten react les 1</h1>
      <Naam name="Erlend"></Naam>
      <Sum numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></Sum>
      <FullName firstName="Erlend" lastName="Geerts"></FullName>
      <OnlyEven numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}></OnlyEven>
      <MyParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa iste
        ab corporis similique illum.
      </MyParagraph>
    </>
  );
};

export default App;
