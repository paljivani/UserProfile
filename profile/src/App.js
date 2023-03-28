
import './App.css';
import Image from './Image.js'
import About from './About.js'

function App() {
  return (
    <div className="App">
        <div className='flex'>
          <About/>
          <div>
          <Image/>
          </div>
        </div>
    </div>
    
  );
}

export default App;
