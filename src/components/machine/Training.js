import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Slider,
  Typography,
  Grid
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';
import axios from 'axios'



const Training = (props) => {
  const [epoch, setEpoch] = useState(10);
  const [batch, setBatch] = useState(10);
  const [learningRate, setLearningRate] = useState(0.01);

  const [img, setimg] = useState('');
  let img_st = "data:image/png;base64,"

  const [img2, setimg2] = useState('');
  let img_st2 = "data:image/png;base64,"

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      if (event.target.name == "epoch") setEpoch(newValue);
      if (event.target.name == "batch") setBatch(newValue);
      if (event.target.name == "learningRate") setLearningRate(newValue);
    }
  };

  const modelFit = () => {
    let options = {
      "epoch" : epoch,
      "batch" : batch,
      "learningRate" : learningRate
    }

    axios.post('http://localhost:4000/test', {
      hyperParameters: options
    })
    .then(function (response) {
        // 전송중 코드 만들 곳
    })
  }


  const test = () => {
    let options = {
      "epoch" : epoch,
      "batch" : batch,
      "learningRate" : learningRate
    }

    axios.get('http://localhost:4000/hist')
    .then(function (response) {
        // 전송중 코드 만들 곳
        setimg(response.data.img1);
        setimg2(response.data.img2);
        
    })
  }

  return (
    <Card {...props}>
      <CardHeader
        title="Training"
      />

      <Divider />
      <CardContent>

    <Grid container spacing={2}>
    <Grid item xs={4}>
      <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Epoch: {epoch}
      </Typography>
      <Slider
        value={epoch}
        min={5}
        step={1}
        max={50}
        name="epoch"
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
    </Grid>

    <Grid item xs={4}>
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Batch: {batch}
      </Typography>
      <Slider
        value={batch}
        name="batch"
        min={1}
        step={1}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
    </Grid>

    <Grid item xs={4}>
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Learning Rate: {learningRate}
      </Typography>
      <Slider
        value={learningRate}
        min={0.001}
        step={0.001}
        max={1}
        name="learningRate"
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
    </Grid>
    </Grid>
    <br/><br/>
    <Divider />

  
          <Button
          fullWidth
          sx={{mt:2, mb:0}}
          variant="contained"
          size="large"
          onClick={modelFit}
          >
            Model FIT
          </Button>



      </CardContent>
      <Grid container spacing={2} textAlign="center">
        <Grid item xs={12}>
      <Button
          // fullWidth
          sx={{mt:2, mb:0}}
          variant="contained"
          size="large"
          onClick={test}
          >
            History Test
          </Button>

          </Grid>
      </Grid>
      
      <Grid container spacing={0} textAlign="center">
      <Grid item xs={6}>
            {img
            ?(<><img src={img_st+img}  style={{maxWidth:450,
                                                minHeight:350}} /></>)
            : null
            }
            </Grid>
      <Grid item xs={6}>
            {img2
            ?(<><img src={img_st2+img2}  style={{maxWidth:450,
                                                minHeight:350}} /></>)
            : null
            }
            </Grid>
      </Grid>

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

export default Training;
