
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import TourCard from '../components/TourCard';


const Home=()=>{

    return(
        <Container sx={{marginY:15}}>  
        <Container>
          <Typography variant="h3" component="h1" align="center" marginBottom={5}>
            Our Travel Agency's <strong>BlueTravel</strong> offer
          </Typography>
          </Container>   
        <Grid container spacing={2}>
          
            {[...Array(10)].map((x, i) =>
         
                <TourCard value={i} key={i}/> 
        
           
        )}
            
         </Grid>
          </Container>
    )
}

export default Home