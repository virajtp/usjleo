
import { colors, Grid, Row } from '@material-ui/core';

const OurClub = () => {
    return (
        // style={{textAlign:'center', paddingLeft:'10%', paddingLeft:'10%'}}
        <div className="ourclub" style={{ fontSize: "20px" }}>
            <Grid container justify="center" alignItems="center" spacing={1}>

                <Grid item xs={12} sm={8} md={8} style={{paddingBottom:"30px"}}>
                    <div className="lcusj">
                        <h2>LEO CLUB OF UNIVERSITY OF SRI JAYEWARDENEPURA</h2>
                        <h4>The phenomenal journey of the Leo Club of District 306 C2 University of Sri Jayewardenepura
                            began on the 11th of December 2019 with the interactive membership of several faculties in the
                            University, under the guidance of staff advisor Lion Dr. Vishaka Sooriyabandara, Department of
                            Political Sciences. Our sponsored Lions Club, the Colombo Chariot Lions Club, had a strong point at
                            the start. Since the inception, Lion Chamara Gamage, President of the Lions Club of Colombo Chariot 21/22,
                            has served as the Leo Advisor, guiding us to success. Leo Uvin Hewawasam who was the very first club president
                            of the Leo Club of District 306 C2 University of Sri Jayewardenepura, guided the club and laid a strong
                            foundation for a long successful journey with his extraordinary talent. Multiple District Vice President 21/22
                            Leo Rahul Attanayake and Past District President of Leo District 306 C2 Leo Lasitha Walisingha were pioneers in
                            installing our club under the omega category.</h4>
                    </div>
                </Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <div className="ourlogo">
                        <h2>Our Logo</h2>
                        <h4>Leading with Experience to seize the Opportunities.
                            We have one goal, one passion: to help those in need.
                            We have reached a critical juncture in our journey within two years of time and a new beginning
                            awaits to alter our perceptions of the future. Believing in the power of new beginnings,
                            we are ready to move forward in Leoism with confidence and optimism in our ability to succeed. </h4>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default OurClub;