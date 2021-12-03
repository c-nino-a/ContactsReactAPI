import ContactsList from "./views/ContactsList";
import ContactForm from "./views/ContactForm";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ContactsList/>}/>
        <Route path='/contact/:id' element={<ContactForm/>}/>
        <Route path='/new' element={<ContactForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
