
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import TourCard from '../components/TourCard';
import { NavLink } from 'react-router-dom';

const Home=()=>{

    return(
        <Container sx={{marginY:15}}>  
        <Container>
          <Typography variant="h3" component="h1" align="center" marginBottom={5}>
            Our Travel Agency's <strong>BlueTravel</strong> offer
          </Typography>
          </Container>   
        <Grid container spacing={5}>
          
            {[...Array(10)].map((x, i) =>
            <NavLink to="/tour" key={i}>
                <TourCard key={i} value={i}/> 
            </NavLink>
           
        )}
            
         </Grid>
          </Container>
    )
}

export default Home