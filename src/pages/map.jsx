import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Stack } from 'grommet';

import Navi from '../components/navi';

import LeafLetMap from '../components/mapComponent/drawOnMap';


const MapPage = () => {
  React.useEffect(() => {
    document.title = "Map"
}, [])
  return (
    <>
      <Navi />
      <Box flex direction='row' height='large' margin='medium' background-color='red'>

        <Stack anchor='center'>  
        <Box>
          <LeafLetMap />
        </Box>
        </Stack>
      </Box>
    </>
  );
}
export default MapPage;