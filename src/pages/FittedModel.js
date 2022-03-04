import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Budget from '../components/dashboard/Budget';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Training from '../components/machine/Training';
import TasksProgress from '../components/dashboard/TasksProgress';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalProfit from '../components/dashboard/TotalProfit';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';

import { useSelector, useDispatch } from 'react-redux';


const FittedModel = () => {

  return (
  <>
    <Helmet>
      <title>DeepLearning | Data Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >


          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Training />
          </Grid>


        </Grid>
      </Container>
    </Box>
  </>
);
}

export default FittedModel;
