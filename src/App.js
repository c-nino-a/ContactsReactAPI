import ContactsList from "./views/ContactsList";
import ContactForm from "./views/ContactForm";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { PersonProvider } from "./provider/personProvider";

function App() {
  return (
    <Router>
      <PersonProvider>
      <Routes>
        <Route path='/' element={<ContactsList/>}/>
        <Route path='/contact/:id' element={<ContactForm/>}/>
        <Route path='/new' element={<ContactForm/>}/>
      </Routes>
      </PersonProvider>
    </Router>
  );
}

export default App;
