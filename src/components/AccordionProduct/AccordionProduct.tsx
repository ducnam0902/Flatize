import React from 'react'
import Typography from '@mui/material/Typography';
import CustomizeAccordion from '../CustomizeAccordion/CustomizeAccordion';
import Box from '@mui/material/Box';

const AccordionProduct: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
      (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };


  return (
    <Box>
      <CustomizeAccordion title="Description" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <Typography sx={{ fontSize: '1.3rem', marginBottom: 0, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </CustomizeAccordion>
      <CustomizeAccordion title="Addtion Information" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <Typography sx={{ fontSize: '1.3rem', marginBottom: 0, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </CustomizeAccordion>
      <CustomizeAccordion title="Reviews (3)" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <Typography sx={{ fontSize: '1.3rem', marginBottom: 0, lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </CustomizeAccordion>
    </Box>
  )
}

export default AccordionProduct
