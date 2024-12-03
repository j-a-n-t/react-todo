import {BrowserRouter} from "react-router";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {App} from "./App.tsx";
import "./styles/index.css";
import "./styles/normalize.css";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StrictMode>,
)
