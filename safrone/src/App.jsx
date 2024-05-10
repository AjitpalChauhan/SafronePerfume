import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Content from './pages/Content';
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/content",
    element: <Content/>
  }

 
]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
