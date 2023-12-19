import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccordionProps } from '@mui/material/Accordion';

interface ICustomizeAccordion extends Omit<AccordionProps, 'children'> {
    title: string,
    children: React.ReactNode,
}

const CustomizeAccordion: React.FC<ICustomizeAccordion> = ({ title, children, ...props }) => {
  return (
    <Accordion sx={{ borderTopLeftRadius: '0 !important', borderTopRightRadius: '0 !important', boxShadow: 'none', borderTop: '1px solid #333333', '& .Mui-expanded': { margin: '0 !important' } }} {...props} >
      <AccordionSummary
        expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          height: '4.5rem',
          padding: 0,
          '&:hover': {
            color: '#1abc9c'
          }
        }}

      >
        <Typography sx={{
          marginBottom: 0,
          fontSize: '1.3rem',
          fontWeight: '700',
          lineHeight: '1.1'

        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default CustomizeAccordion
