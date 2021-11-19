import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyPhoto from "./images/userImage.png";
import { colors, Grid, Row } from '@material-ui/core';
import OurClub from './Aboutus/OurClub';
import ExcoDir from './Aboutus/Exco_Dir';
import Awards from './Aboutus/Awards';

export default () => (
  <Tabs style={{justifyContent:'start'}}>
    <TabList>
      <Tab><h3>Our Club</h3></Tab>
      <Tab><h3>Current Officers</h3></Tab>
      <Tab><h3>Awards</h3></Tab>

    </TabList>
    <TabPanel>

      <OurClub />
    </TabPanel>
    <TabPanel>
      <ExcoDir />
    </TabPanel>
    <TabPanel>
      <Awards/>
    </TabPanel>
  </Tabs>
);

// import { useState } from "react";
// import "./App.css";
// import MyPhoto from "./images/userImage.png";
// import { colors, Grid, Row } from '@material-ui/core';

// function Tabs() {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   return (
//     <div className="container">
//       <div className="bloc-tabs">
//         <button
//           className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(1)}
//         >
//           Exco
//         </button>
//         <button
//           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(2)}
//         >
//           Tab 2
//         </button>
//         <button
//           className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(3)}
//         >
//           Tab 3
//         </button>
//       </div>

//       <div className="tabContent-tabs">
//         <div
//           className={toggleState === 1 ? "tabContent  active-tabContent" : "tabContent"}
//         >
//           <h2>Executive Board</h2>
//           <hr />
//           <p>
        //   <div id="president">
        //     <img src={MyPhoto} height='260px'  style={{borderRadius:'50%', border:'10px solid black'}} />
        //     <h2>President</h2>
        //     <h3>Randunu Rupasinghe</h3>
        //   </div>

        //   <Grid container justify="center" alignItems="center" spacing={1}>
        //     <Grid item xs={16} sm={8} md={5}>
        //       <img src={MyPhoto} height='240px'  style={{borderRadius:'50%', border:'10px solid black'}} />
        //       <h2>Secretary</h2>
        //       <h3>Rajinee Mahaushadhee</h3>
        //     </Grid>
        //     {/* <Grid item xs={8} md={4}> */}
        //     <Grid item xs={8} sm={8} md={5}>
        //       <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
        //       <h2>Vice President</h2>
        //       <h3>Sanka Samarasekara</h3>
        //     </Grid>
        //   </Grid>
        //   <Grid container justify="center" alignItems="center" spacing={2}>
        //     <Grid item xs={12} sm={8} md={4}>
        //       <img src={MyPhoto} height='240px'  style={{borderRadius:'50%', border:'10px solid black'}} />
        //       <h2>Treasurer</h2>
        //       <h3>Nethmi Sarada</h3>
        //     </Grid>
        //     <Grid item xs={12} sm={8} md={4}>
        //       <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
        //       <h2>Asst. Secretary</h2>
        //       <h3>Melissa Handapangoda</h3>
        //     </Grid>
        //     <Grid item xs={12} sm={8} md={4}>
        //       <img src={MyPhoto} height='240px' style={{borderRadius:'50%', border:'10px solid black'}} />
        //       <h2>Asst. Treasurer</h2>
        //       <h3>Sanduni Maheshika</h3>
        //     </Grid>
        //   </Grid>
//           </p>
//         </div>

//         <div
//           className={toggleState === 2 ? "tabContent  active-tabContent" : "tabContent"}
//         >
//           <h2>Content 2</h2>
//           <hr />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
//             voluptatum qui adipisci.
//           </p>
//         </div>

//         <div
//           className={toggleState === 3 ? "tabContent  active-tabContent" : "tabContent"}
//         >
//           <h2>Content 3</h2>
//           <hr />
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
//             nostrum rerum laudantium totam unde adipisci incidunt modi alias!
//             Accusamus in quia odit aspernatur provident et ad vel distinctio
//             recusandae totam quidem repudiandae omnis veritatis nostrum
//             laboriosam architecto optio rem, dignissimos voluptatum beatae
//             aperiam voluptatem atque. Beatae rerum dolores sunt.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tabs;
/************************************************************************************************ */
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Tab from './Tab';


// class Tabs extends Component {
//   static propTypes = {
//     children: PropTypes.instanceOf(Array).isRequired,
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       activeTab: this.props.children[0].props.label,
//     };
//   }

//   onClickTabItem = (tab) => {
//     this.setState({ activeTab: tab });
//   }

//   render() {
//     const {
//       onClickTabItem,
//       props: {
//         children,
//       },
//       state: {
//         activeTab,
//       }
//     } = this;

//     return (
//       <div className="tabs">
//         <ol className="tab-list">
//           {children.map((child) => {
//             const { label } = child.props;

//             return (
//               <Tab
//                 activeTab={activeTab}
//                 key={label}
//                 label={label}
//                 onClick={onClickTabItem}
//               />
//             );
//           })}
//         </ol>
//         <div className="tab-tabContent">
//           {children.map((child) => {
//             if (child.props.label !== activeTab) return undefined;
//             return child.props.children;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Tabs;