
import HelloWorld from "./components/HelloWorld";
import Sum from "./components/Sum";
import Random from "./components/Random";
import Big from "./components/Big";
import List from "./components/List";



function App() {
  return (
    <div className="App">
      <HelloWorld />
      
      <Sum a={5} b={7} /> 
      <Random min={5} max={10} /> 
      <Big a={5} b={4} /> 
      <List items={['Apple', 'Kiwi']} />
    </div>
  );
}

export default App;