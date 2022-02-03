import about from './images/cover.jpg';
import logo from './images/leologo.png';
import { Fade, Slide } from "react-awesome-reveal";
import { colors } from '@material-ui/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import Typewriter from 'typewriter-effect';

var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 75,
// });

const Home = () => {
  return (
    <div className="home">
      <section id="homeHead">


        <h1 >
          {/* <Typewriter
          options={{
            strings: ['LEO CLUB OF UNIVERSITY OF SRI JAYEWARDENEPURA', 'Aspiring To Serve'],
            autoStart: true,
            loop: true,
          }}
        /> */}
          LEO CLUB OF DISTRICT 306 C2
        </h1>
        <h3>UNIVERSITY OF SRI JAYEWARDENEPURA</h3>
      </section>
      {/* <h1 style={{color: "lightblue"}}>UNIVERSITY OF SRI JAYEWARDENEPURA</h1> */}



      <br />
      <section className="hii">
        <Fade bottom duration={2000}>
          <div className="row section-head">
            <div className="two columns header-col">
            </div>
            <img src={about} width="100%" style={{ position: 'relative' }} />
            {/* <h2>jyhghj</h2> */}
          </div>
        </Fade>
        <div className="homecontent">
          <Fade duration={1000}>
            <div className="aboutLeo">

              <div class="demo-wrap">
                {/* <img
                  class="demo-bg"
                  src={logo}
                  alt=""
                /><br/> */}
                {/* <div class="demo-content">
                  <fieldset>
                    <div>
                      <p>
                        Leo Club is a youth organisation of Lions Club International. The acronym L.E.O stands for Leadership, Experience, Opportunity.
                        The Leo Club objective is, to provide the youth of the world with an opportunity for development and contribution, individually and collectively, as responsible members of the local, national and international community.
                        Leo Club encourages the youth to develop leadership qualities by participating in social service activities. They are dependent on a Lions club to sponsor and initiate a Leo club. Leo Club members are addressed as "Leos." They conduct various projects in the fields of health care, elders, children, differently abled, literacy and education, and self-development.
                        LEO Club is the largest youth club of voluntary character in the world , present in 140 countries with over 160,000 members. <span className="required">*</span>
                      </p>
                    </div>
                  </fieldset>
                </div> */}
                <br />
                <p>
                  
                  <h1>LEOISM</h1>
                  <h4 className="homes">Leo Clubs include the young members of Lions Club International. 
                    The Leo Club's mission is to create opportunities for global youth to grow and 
                    contribute as responsible members of their local, national, 
                    and international communities, both individually and collectively.
                     The Leo and Lions Movement Sri Lanka is referred to as the Leo Multiple District 306. 
                     The Leo Club of Wattala was founded in 1969 and was the first Leo Club in Sri Lanka. 
                     Since then, there have been over 169 Leo Clubs established over the island, 
                     with over 7100 members. 
                     L.E.O. (Leadership, Experience, Opportunity) is an abbreviation that stands for 
                     Leadership, Experience, and Opportunity. Thus, the Leo Clubs encourage young leaders to 
                     participate in social services, develop leadership and teamwork skills through the 
                     experiences they gain.</h4>
                    <br/>
                     <h1>LIONS CLUB INTERNATIONAL</h1>
                  <h4>The International Association of Lions Clubs, also known as Lions Club International, 
                    is a non-political service organization founded by Melvin Jones in 1917 in Chicago, 
                    Illinois. It is one of the largest service club organizations in the world, 
                    working on a variety of humanitarian initiatives all around the world. 
                    It is the largest, fastest growing, and most effective organization of its kind in the world,
                     with around 48,000 Lions Clubs dispersed across the globe, 
                     encompassing more than 210 nations and geographical areas. 
                     Together, Leos and Lions have made a great effect on the world over the last 100 years, 
                     giving it a better place to live. The vast number of projects carried out by 
                     Lions Club International during the COVID-19 pandemic exemplifies this, 
                     demonstrating that ordinary people can achieve remarkable things when they work together 
                     as a team.</h4>
                     <br/>
                     <h1>LEO CLUB OF DISTRICT 306 C2 UNIVERSITY OF SRI JAYEWARDENEPURA</h1>
                  <h4>Leo Club of District 306 C2 University of Sri is a university-based omega Leo club 
                    that belongs to the Leo District C2 of Leo Multiple 306 Sri Lanka. This young club's journey 
                    began on December 11th, 2019. J'pura C2 Leos have completed numerous projects over the years 
                    and have been acknowledged by the district on various occasions for their contributions to 
                    society.</h4>
                    
                </p>
              </div>
            </div>

          </Fade>
        </div>
      </section>
    </div>


  );
}

export default Home;