import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import First from "./pages/First"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SingleProduct from "./pages/Singleproduct"
import Cart from "./pages/Cart"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import "./App.css"
import { createContext, useState } from "react"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

export const ecomcontext = createContext()

const vedrouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <First />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <ProtectedRoute />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
    ]
  }
])



function App() {
  const [cart, setCart] = useState([])
  function handleAddToCart(obj) {
    setCart([...cart, {...obj, quantity:1}])
  }
  function HandleRemoveFromCart(id) {
    const sendToCart = cart.filter((product) => product.id !== id)
    setCart([...sendToCart])
  }
  function changeQuantity(id, action){
    if(action === "icre"){
      setCart(cart.map((item)=>{ return   item.id===id ? {...item, quantity: item.quantity + 1} : item}))
    }
    else{
      setCart(cart.map((item)=>{ return   item.id===id ? {...item, quantity: item.quantity - 1} : item}))
    }
     }
    console.log(cart);
    
  return (
    <ecomcontext.Provider value={{ cart, handleAddToCart, HandleRemoveFromCart , changeQuantity}}>
      <RouterProvider router={vedrouter}></RouterProvider>
    </ecomcontext.Provider>
  )
}

export default App
