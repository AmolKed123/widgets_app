import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Box,Typography,Tab,Tabs,Paper} from '@mui/material';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:'100%'}}
    >
      {value === index && (
       <Paper elevation={2} sx={{height:'100%'}}>
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
       </Paper>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%',height:'160px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',bgcolor:'#ff8533' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       Home Page.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        About Page.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Contacts Page.
      </CustomTabPanel>
    </Box>
  );
}
