import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Model = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Fitted Model
          </Button>
        )}
        title="Fitted Model"
      />

      <Divider />
      <CardContent>
        {/* <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box> */} 딥러닝 시작
          <Button>
            FIT
          </Button>
          <br/><br/>
            확인 이미지
          <Button>
            upload
          </Button>
      </CardContent>


      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <CardContent>
        결과를 보여주는 창
        </CardContent>
      </Box>
    </Card>
  );
};

export default Model;
