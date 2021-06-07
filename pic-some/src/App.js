import React from "react"
import {Switch, Route} from "react-router-dom"
import "./styles.css"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Login from "./pages/Login"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
               <Route exact path="/">
                    <Login />
                </Route>

                <Route path="/photos">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App