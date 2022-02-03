
import {  Grid } from '@material-ui/core';
import president from "./Exco & Dir/Randunu.jpg";
import secretary from "./Exco & Dir/Rajinee.png";
import vp from "./Exco & Dir/Sanka.jpg"
import treasurer from "./Exco & Dir/Nethmi.jpg"
import asecretary from "./Exco & Dir/Melissa.png"
import atreasurer from "./Exco & Dir/Sanduni.jpg"


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const ExcoDir = () => {

    const images = importAll(require.context('./Exco & Dir', false, /\.(png|jpe?g|svg)$/));
    // const president = 'Randunu.jpg';
    return (
        <div className="exco">
            <div id="president">
                <img src={president} height='260px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                <h2>President</h2>
                <h3>Leo Randunu Rupasinghe</h3>
            </div>

            <Grid container justify="center" alignItems="center" spacing={1}>
                <Grid item xs={16} sm={8} md={5}>
                    <img src={secretary} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Secretary</h2>
                    <h3>Leo Rajinee Mahaushadhee</h3>
                </Grid>
                {/* <Grid item xs={8} md={4}> */}
                <Grid item xs={8} sm={8} md={5}>
                    <img src={vp} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Vice President</h2>
                    <h3>Leo Sanka Samarasekara</h3>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={8} md={4}>
                    <img src={treasurer} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Treasurer</h2>
                    <h3>Leo Nethmi Sarada</h3>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <img src={asecretary} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Asst. Secretary</h2>
                    <h3>Leo Melissa Handapangoda</h3>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <img src={atreasurer} height='240px' style={{ borderRadius: '50%', border: '10px solid black' }} />
                    <h2>Asst. Treasurer</h2>
                    <h3>Leo Sanduni Maheshika</h3>
                </Grid>
            </Grid>
        </div>
    );
}

export default ExcoDir;