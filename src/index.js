import ReactDOM from 'react-dom/client';
import {Calculator, NavBar, Form} from './React_p';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{background:"hotpink"}}>
    <NavBar/>
    <Form/>
    <Calculator/>
  </div>
);