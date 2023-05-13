import { Container, Typography,Box,BottomNavigation,Paper } from "@mui/material"
import { faker } from '@faker-js/faker';
import ImageCollage from '../components/ImageCollage';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";


const Tour=()=>{
    const randomNum = Math.floor(Math.random() * 1000); 
    const imageUrl = `https://loremflickr.com/800/400/praque?random=${randomNum}`
    const{id}=useParams()
    const navigate = useNavigate();

   
  
    return(
   <Container sx={{width:900,marginBottom:15}} >
    <Typography variant="h3" component="h1" marginTop={12}>
        Tour {id} -  {faker.lorem.sentences(1)}
        </Typography>
            <Box marginTop={3} sx={{display:"flex"}}>
                <img src={imageUrl} alt="" heigth={350} width={600}/>
                <ImageCollage />
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        About this ticket
                        </Typography>
                        <Typography variant="paragraph" component="p" marginTop={3}>
                        {faker.lorem.sentences(9)}
                        </Typography>
                </Box>
                <Box marginBottom={5}>
                    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                        Frequently Asked Questions
                        </Typography>
                       <Accordion />
                </Box>
             
                <Button onClick={() => navigate(-1)} variant="contained" marginBottom={10}>Back</Button>
               
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation>
                        <Modal/>
                    </BottomNavigation>
                 </Paper>
                
    </Container>
    )
}

export default Tour