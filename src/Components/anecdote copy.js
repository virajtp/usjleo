import HTMLFlipBook from "react-pageflip";
import pge0 from "./anecdote/a00.jpg";
import pge1 from "./anecdote/a01.jpg";
import pge2 from "./anecdote/a02.jpg";
import pge3 from "./anecdote/a03.jpg";
import pge4 from "./anecdote/a04.jpg";
import pge5 from "./anecdote/a05.jpg";
import pge6 from "./anecdote/a06.jpg";
import pge7 from "./anecdote/a07.jpg";
import pge8 from "./anecdote/a08.jpg";
import pge9 from "./anecdote/a09.jpg";
import pge10 from "./anecdote/a10.jpg";
import pge11 from "./anecdote/a11.jpg";
import pge12 from "./anecdote/a12.jpg";
import pge13 from "./anecdote/a13.jpg";
import pge14 from "./anecdote/a14.jpg";
import pge15 from "./anecdote/a15.jpg";
import pge16 from "./anecdote/a16.jpg";
import pge17 from "./anecdote/a17.jpg";
import pge18 from "./anecdote/a18.jpg";
import pge19 from "./anecdote/a19.jpg";

function Anecdote(props) {
  return (
    <div className="anecdote">
    <HTMLFlipBook width={425} height={600}>
      <div className="demoPage"><img src={pge0} height="600" /></div>
      <div className="demoPage"><img src={pge1} height="600" /></div>
      <div className="demoPage"><img src={pge2} height="600"/></div>
      <div className="demoPage"><img src={pge3} height="600"/></div>
      <div className="demoPage"><img src={pge4} height="600"/></div>
      <div className="demoPage"><img src={pge5} height="600"/></div>
      <div className="demoPage"><img src={pge6} height="600"/></div>
      <div className="demoPage"><img src={pge7} height="600" /></div>
      <div className="demoPage"><img src={pge8} height="600"/></div>
      <div className="demoPage"><img src={pge9} height="600"/></div>
      <div className="demoPage"><img src={pge10} height="600"/></div>
      <div className="demoPage"><img src={pge11} height="600"/></div>
      <div className="demoPage"><img src={pge12} height="600"/></div>
      <div className="demoPage"><img src={pge13} height="600"/></div>
      <div className="demoPage"><img src={pge14} height="600"/></div>
      <div className="demoPage"><img src={pge15} height="600"/></div>
      <div className="demoPage"><img src={pge16} height="600"/></div>
      <div className="demoPage"><img src={pge17} height="600"/></div>
      <div className="demoPage"><img src={pge18} height="600"/></div>
      <div className="demoPage"><img src={pge19} height="600"/></div>
    </HTMLFlipBook>
    </div>
  );
}
 
export default Anecdote;
