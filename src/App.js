import './App.css';
import SoundPad from './sound-pad';

function App() {
  
  const renderSoundPad = (i) => {

    return <SoundPad value={i} />;
  }

 

  return (
      <div className="App-body">
      <header className="App-header">
        <h1>THE SIMPSONS Sampler</h1>
      </header>
      <div className="App-main">
      <div className="PadsRow">
       {renderSoundPad(1)}
       {renderSoundPad(2)}
       {renderSoundPad(3)}
       {renderSoundPad(4)}
       {renderSoundPad(5)}
      </div>
      <div className="PadsRow">
       {renderSoundPad(6)}
       {renderSoundPad(7)}
       {renderSoundPad(8)}
       {renderSoundPad(9)}
       {renderSoundPad(10)}
      </div>
      <div className="PadsRow">
       {renderSoundPad(11)}
       {renderSoundPad(12)}
       {renderSoundPad(13)}
       {renderSoundPad(14)}
       {renderSoundPad(15)}
      </div>
      <div className="PadsRow">
       {renderSoundPad(16)}
       {renderSoundPad(17)}
       {renderSoundPad(18)}
       {renderSoundPad(19)}
       {renderSoundPad(20)}
      </div>
      <div className="PadsRow">
       {renderSoundPad(21)}
       {renderSoundPad(22)}
       {renderSoundPad(23)}
       {renderSoundPad(24)}
       {renderSoundPad(25)}
      </div>
      
      </div>
      </div>
  );
}

export default App;
