import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import "./accordionfaq.css";


const AccordionFaq = ({
  data,
  title
}) => {
  return (
    <>
    <div><h1 className="faq-title">{title}</h1></div>
    <div className='faq-list'>
        <AccordionGroup
      variant="outlined"
      transition="0.2s"
      sx={{
        maxWidth: 1000,
        borderRadius: 'lg',
        [`& .${accordionSummaryClasses.button}`]: {
          color: 'white',
          marginBottom: '10px'
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: '0.75rem',
          },
        },
      }}
    >
      {data.map(faq => <Accordion>
        <AccordionSummary >{faq.question}</AccordionSummary>
        <AccordionDetails variant="soft">
        {faq.answer}
        </AccordionDetails>
      </Accordion>      
          )}
      
    </AccordionGroup>
    </div>
    </>
  )
}

export default AccordionFaq;