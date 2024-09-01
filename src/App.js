import Accodian from "./Accodian";
import { AccordionData } from "./Content";
function App() {
  return (
   <div>
    <div className="accordioan">
      {AccordionData.map(({title,content})=>{
   return     <Accodian title={title} content={content} key={Math.random()*100}/>
      })}
    </div>
   </div>
  );
}

export default App;
