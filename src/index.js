import React from "react";
import { BrowserRouter} from 'react-router-dom';
import reactdom from "react-dom";
import App from "./App"

reactdom.render(
<BrowserRouter>
<App/>
</BrowserRouter> ,document.getElementById("root")
);
