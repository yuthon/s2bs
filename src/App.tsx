import './App.css';
import Main from './Main';
import { LanguageProvider } from './languages/LanguageProvider';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </div>
  );
}

export default App;
