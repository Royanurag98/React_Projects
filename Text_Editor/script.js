import { createRoot} from 'react-dom/client'
import TextEditor from './componentts/TextEditor'
import Navbar from './Components/Navbar'
const root=createRoot(document.querySelector("#root"))
root.render(
[
<Navbar/>,
<TextEditor/>
])