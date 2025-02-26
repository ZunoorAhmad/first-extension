import './App.css';
import Notes from './components/Notes';

function App() {

  const changeBackground = async () => {
    let [tab] = await window.chrome.tabs.query({ active: true, currentWindow: true });

    window.chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        document.body.style.backgroundColor = "lightblue";
      }
    });
  };

  return (
    <div>
      <Notes/>
    </div>
  );
}

export default App;
