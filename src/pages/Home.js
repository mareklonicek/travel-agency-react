import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Select, Typography,MenuItem } from "@mui/material";
import TourCard from '../components/TourCard';
import { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState("Prague");


  return (
    <Container sx={{marginY:15}}>  
      <Container>
        <Typography variant="h3" component="h1" align="center" marginBottom={5}>
          Our Travel Agency's <strong>BlueTravel</strong> offer
        </Typography>   
        <Typography className="destination" sx={{color:"#6600cc"}}variant="h4" component="h5" align="left" marginBottom={2}>
          ...Select your dream destination:
        </Typography>  
          <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small-label">Destination</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedDestination}
        label="Choose your dream destination"
        onChange={(e)=>{setSelectedDestination(e.target.value);}}
      >
        <MenuItem value="Prague">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Prague">Prague</MenuItem>
          <MenuItem value="Paris">Paris</MenuItem>
          <MenuItem value="London">London</MenuItem>
          <MenuItem value="Barcelona">Barcelona</MenuItem>
          <MenuItem value="Rome">Rome</MenuItem>
          <MenuItem value="Sydney">Sydney</MenuItem>
          <MenuItem value="Dubai">Dubai</MenuItem>
          <MenuItem value="Bangkok">Bangkok</MenuItem>
          <MenuItem value="Amsterdam">Amsterdam</MenuItem>
          <MenuItem value="Berlin">Berlin</MenuItem>
          <MenuItem value="Zurich">Zurich</MenuItem>
          <MenuItem value="Dubrovnik">Dubrovnik</MenuItem>
          <MenuItem value="Athens">Athens</MenuItem> 
      </Select>
    </FormControl>
      </Container >   
      <Grid container spacing={2} marginTop={5}>
        {[...Array(22)].map((x, i) => (
          <TourCard value={i+1} key={i} selectedDestination={selectedDestination}/> 
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
