import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Select, Typography,MenuItem } from "@mui/material";
import TourCard from '../components/TourCard';
import { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState("");


  return (
    <Container sx={{marginY:15}}>  
      <Container>
        <Typography variant="h3" component="h1" align="center" marginBottom={5}>
          Our Travel Agency's <strong>BlueTravel</strong> offer
        </Typography>   
        <Typography variant="h5" component="h5" align="left" marginBottom={2}>
          Select your dream destination
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
        <MenuItem value="">
          <em>Prague</em>
        </MenuItem>
        <MenuItem value="Prague">Prague</MenuItem>
          <MenuItem value="Paris">Paris</MenuItem>
          <MenuItem value="London">London</MenuItem>
          <MenuItem value="Barcelona">Barcelona</MenuItem>
          <MenuItem value="Rome">Prague</MenuItem>
          <MenuItem value="Sydney">Paris</MenuItem>
          <MenuItem value="Rio de Janeiro">London</MenuItem>
          <MenuItem value="Cape Town">Barcelona</MenuItem>
          <MenuItem value="Dubai">Prague</MenuItem>
          <MenuItem value="Bangkok">Paris</MenuItem>
          <MenuItem value="Amsterdam">London</MenuItem>
          <MenuItem value="Berlin">Barcelona</MenuItem>
          <MenuItem value="Zurich">Prague</MenuItem>
          <MenuItem value="Dubrovnik">Paris</MenuItem>
          <MenuItem value="Athens">London</MenuItem> 
      </Select>
    </FormControl>
      </Container >   
      <Grid container spacing={2} marginTop={5}>
        {[...Array(10)].map((x, i) => (
          <TourCard value={i+1} key={i} selectedDestination={selectedDestination}/> 
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
