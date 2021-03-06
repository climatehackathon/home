import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Anchor, Box, Paragraph, Tab, Tabs } from 'grommet';

import Navi from '../components/navi';
import { howItWorks, landproParagraphs, referencedArticles} from '../components/landProBase';
import SampleCard from '../components/landProBase/sampleCard';

const HomePage = () => {
  React.useEffect(() => {
    document.title = "Home"
}, [])
  const [index, setIndex] = React.useState();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <>
      <Navi />
      <Box flex direction='column' margin='large'  >
      <Tabs activeIndex={index} onActive={onActive}>
          <Tab title='How does it work' >
            <Box fill pad="medium" align="center">
              <Box width='85%' alignSelf='center'>
                <Box flex direction='row' width='85%' justify='center' alignSelf='center' >
                    {howItWorks.map((stage, index) => (
                        <SampleCard stage={stage} key={index}/>
                    ))}
                </Box>
                <Paragraph>
                  To read more, please check 
                  <Anchor 
                      href={referencedArticles.link} label=' this publication' />.
                </Paragraph> 
              </Box>
            </Box>
          </Tab>
          <Tab title='Inspiration' >
            <Box fill pad="center" align="center">
              <Box  margin='medium' flex direction='column' >
                <Box width='85%' alignSelf='center'>
                    {landproParagraphs.map((paragraph, index) => (
                    <Paragraph fill key={index} size='medium' textAlign='center'>
                        {paragraph}
                    </Paragraph>
                    ))}
                </Box>
              </Box>
            </Box>
          </Tab>
      </Tabs>
      </Box>
    </>
  );
};

export default HomePage;

