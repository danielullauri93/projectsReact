import { Route, Routes } from 'react-router-dom';
import { Heading, TaskForm, TaskList } from './components';
import './App.css';
import { GlobalContextProvider } from './context/GlobalContext';

// console.log(GlobalContextProvider());
function App() {
  return (
    <>
      <div className="h.screeen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <GlobalContextProvider>
            <Heading />

            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>

          </GlobalContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
