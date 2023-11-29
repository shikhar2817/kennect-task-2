import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { Dashboard } from "./components/Dashboard";
import GlobalContextProvider from "./context/GlobalContextProvider";

function App() {
    return (
        <GlobalContextProvider>
            <div className="App">
                <SearchBar />
                <Dashboard />
            </div>
        </GlobalContextProvider>
    );
}

export default App;
