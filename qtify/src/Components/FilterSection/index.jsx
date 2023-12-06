
import { useState } from "react";
import Carousel from "../Carousel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./fsection.css";


const FilterSection = ({ title, data, navId, filters, executeFilter }) => {
    const [selectedTab, setSelectedTab] = useState(0);

  return <div className="section">
  <div>
      <h1 className="title">{title}</h1> 
  </div>  

  <Tabs 
  value={selectedTab}
  onChange={(e,value) => {
    setSelectedTab(value);
    executeFilter(filters[value].key);
  }}
  TabIndicatorProps={{
    style: {
      backgroundColor: 'var(--css-primary)'
    }
  }}
  > 
        {filters.map(f => <Tab className='tab' key={f.key} label={f.label} />)}
  </Tabs>  

  <Carousel data={data} navId={navId}/>  
</div>
}

export default FilterSection;
