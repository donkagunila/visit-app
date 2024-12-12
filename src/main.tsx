import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./router";
import {BrowserRouter} from "react-router-dom";
import { store } from "./stores/store";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <Router />
        </Provider>
    </BrowserRouter>,
)
