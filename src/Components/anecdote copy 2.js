
import React  from 'react';
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

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* <h1>Page Header</h1> */}
      <p>{props.children}</p>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

function Anecdote(props) {
  return (
    <div className="anecdote">
      <div>
        <h2>Monthly News letter</h2>
      </div>
      <br/>
      {/* <Page number="nlcontent"> */}
        <HTMLFlipBook width={425} height={600}>
          {/* <Page number="nlcontent"> */}
          <Page number="demoPage" id="anepge" ><img src={pge0} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge1} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge2} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge3} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge4} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge5} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge6} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge7} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge8} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge9} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge10} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge11} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge12} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge13} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge14} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge15} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge16} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge17} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge18} height="600"/></Page>
          <Page number="demoPage" id="anepge"><img src={pge19} height="600"/></Page>
          {/* </div> */}
        </HTMLFlipBook>
      {/* </div>  */}
    </div>
  );
}

export default Anecdote;