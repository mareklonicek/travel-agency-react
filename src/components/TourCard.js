import  Paper from "@mui/material/Paper"
import Grid from '@mui/material/Grid';
import { faker } from '@faker-js/faker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { createTheme,ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";



const TourCard=({value})=>{
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
   const imageUrl = `https://loremflickr.com/800/400/praque?random=${randomNum}`; // Append the random number to the URL of the image
  const rating=faker.random.numeric(1)/2
  const theme=createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:14,
                        color:"gray"
                    }
                }
            ]
        }
    }
  })
    return(
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Link to={`/tour/`} style={{ textDecoration: 'none' }}>
        <Paper elevation={3} sx={{backgroundColor:"#fff"}}>
            <img src={imageUrl} width={300} height={50} 
             className="img"/>
            <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                    Tour {value+1} {faker.lorem.sentence(5)}
                    </Typography>
                    <Box sx={{display:"flex",alignItems:"center"}}  marginTop={1}>
                        <AccessTime sx={{width:12.5}}/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>     
                        {Math.floor(Math.random()*9)+1} hours
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}} marginTop={3}>
                    <Rating name="read-only" size="small"
                    value={rating} precision={ 0.5} readOnly />
                     <Typography variant="body2" component="p" marginLeft={0.5}>
                        {rating} 
                        </Typography>
                        <Typography variant="body3" component="p" marginLeft={1.5}>
                        <small>({faker.random.numeric(3)}  reviews)</small>
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",alignItems:"center"}} marginTop={1.5}
                     >
                        <Typography variant="h6" component="h3" marginBottom={1.5}>
                        From {faker.random.numeric(3)} &euro;
                        </Typography>
                    </Box>
            </Box>
            
        </Paper>
        </Link>
        </ThemeProvider>
        </Grid>
    ) 
 
}

export default TourCard