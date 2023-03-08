import appHeader from './appHeader'
import './App.css';
import StudentApplication from "./pages/StudentApplication";

function App() {
    let ActivePage
    switch (window.location.pathname) {
        case "/":
            break
        case "/studentApplication":
            ActivePage = <StudentApplication/>
            break
    }
  return (
      <div>
          {appHeader()}
          {ActivePage}
      </div>

  );
}

export default App;
