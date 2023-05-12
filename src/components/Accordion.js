
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faker } from '@faker-js/faker';

const SimpleAccordion=()=> {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">How long is the travel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {faker.lorem.sentences(5)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle1">Do we need to bring fodd and drinks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {faker.lorem.sentences(4)}
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle1">What we will see?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {faker.lorem.sentences(11)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion