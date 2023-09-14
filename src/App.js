
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import About from './components/about';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<NavBar/>}>
  <Route path='/' element={<Textform heading="Enter a text"/>}/>
  <Route path='/Textform' element={<Textform heading="Enter a text"/>}/>

  {/* here you cannot give  <Route path='./components/about' element={<About/>}/> because will give error */}
  <Route path='/about' element={<About/>}/>
</Route>
)
);
export default function App(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
  );
}


