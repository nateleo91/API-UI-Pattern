import React from "react"
import'../Styles.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const TabsList = (props) => {

return (
<div className="allTabs">
    <Tabs>
        <TabList className="navTabs">
            {props.data.map((tab, id) =>
                <Tab key={id}> {tab.title} </Tab> )}
        </TabList>
        
        {props.data.map((tab, id) =>
        <TabPanel  key={id}>
            <div className="img column">
                <figure><img src={tab.image_url} className="bookImg" alt="img" /></figure>
                <p className="release">{tab.release_date}</p>           
            </div>
            <div className="bookInfo">
                <p className="author">{tab.name}</p>
            </div>
        </TabPanel> 
    )}
    </Tabs>
</div>
)}

export default TabsList;
