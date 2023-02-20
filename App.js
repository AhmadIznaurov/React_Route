import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ul>
        <li>Html</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React</li>
      </ul>
    </div>
  );
}

const Header = () => {
  return (
      <div>It is possible to learn React more effectively</div>
  )
}

export default App;
