import './App.css';
import ReactGridLayout from './Components/ReactGridLayout';

const  App=()=> {
  
  let attributeValues={
    NumberOfColumns:3,
    NumberOfBoxes:36
  }

  return (
    <div className="App">
      <ReactGridLayout attributeValues={attributeValues}/>
    </div>
  );
}

export default App;
