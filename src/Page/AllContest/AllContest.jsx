import useAddedContest from "../../Hooks/useAddedContest";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ContesTab from "./ContesTab";

const AllContest = () => {
    const {addedContest}= useAddedContest();
    console.log(addedContest);
    const addedFilterContest = addedContest.filter(item => item.status === 'approved');
    const Business = addedFilterContest.filter(item => item.tags === 'Business');
    const Medical = addedFilterContest.filter(item => item.tags === 'Medical');
    const Writing = addedFilterContest.filter(item => item.tags === 'Writing');
    const Gaming = addedFilterContest.filter(item => item.tags === 'Gaming');
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab>Business</Tab>
      <Tab>Medical</Tab>
      <Tab>Writing</Tab>
      <Tab>Gaming</Tab>
    </TabList>

    <TabPanel  >
    <ContesTab items={Business}/>
  
    </TabPanel>

    <TabPanel >
  <ContesTab  items={Medical}/>
    </TabPanel>

    <TabPanel >
  <ContesTab  items={Writing}/>
    </TabPanel>

    <TabPanel >
  <ContesTab  items={Gaming}/>
    </TabPanel>


  </Tabs>  
        </div>
    );
};

export default AllContest;