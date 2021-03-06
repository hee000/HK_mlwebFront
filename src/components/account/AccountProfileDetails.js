import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Input
} from '@material-ui/core';

import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

const AccountProfileDetails = (props) => {
  const loginstate = useSelector(state => state.loggin);
  // state = { selectedFiles: null };
  const [selectedFiles, setSelectedFiles] = useState(false);
  const [cleanUpLoad, setcleanUpLoad] = useState(false);
  
  const diskviewer = e => {
    axios.get('http://localhost:4000/diskinfo').then(function (response) {
      setUsingDisk(cloudList => cloudList = response.data.usingdisk);
      // console.log(response.data.usingdisk);
      return response.data.usingdisk
    })};
    
  const [usingDisk, setUsingDisk] = useState(diskviewer());


  const onClickHandler = e => {
    var formData = new FormData();
    // console.log(selectedFiles.length)
    for (var i=0; i<selectedFiles.length; i++){
      formData.append("image[]", selectedFiles[i]);
    }
    // formData.append("image[]", selectedFiles[0]);
    console.log(formData);
    axios.post('http://localhost:4000/imgupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })

    setSelectedFiles(false);
    setcleanUpLoad("Upload complete");

    // axios.post(`http://localhost:4000/test`, formData, {headers: headers});
  };


  const fileChangedHandler = e => {
    const files = e.target.files;
    setcleanUpLoad(false);
    setSelectedFiles( selectedFiles => selectedFiles = files);
  };

  const nameviewer = e => {
    var arr = [];
    for (var i=0; i<e.length; i++){
      arr.push(<li>{e[i].name}</li>)
    }
    // arr = e.map((ev) =>
    // <li>{ev.name}</li>
    // )

    arr = arr.map((name) =>
      <ol>{name}</ol>
    )
    console.log(arr);
    return arr
  };


  return (
    <form
      action = "http://localhost:4000/imgupload" method = "POST" encType = "multipart/form-data"
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="????????? ????????? ?????? / ??????"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              ????????? ??????          
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >

  {/* <input name="FILE[]" style={{ display: 'none' }} accept="image/*" type="file" multiple onChange={fileChangedHandler}/> */}
  
  {/* <input name="FILE[]" type="file" multiple onChange={fileChangedHandler}/> */}
  {/* <input type="submit" /> */}
  {/* <Input variant="contained" type="submit"/> */}
  

  {/* <Button variant="contained" component="span" onClick={onClickHandler} >
    Upload
  </Button> */}

  {/* <input
  accept="image/*"
  // className={classes.input}
  style={{ display: 'none' }}
  multiple
  type="file"
  onChange={fileChangedHandler}
  /> */}
  <Button variant="contained" component="label">
    Explorer
    <input
  accept="image/*"
  // className={classes.input}
  style={{ display: 'none' }}
  multiple
  type="file"
  onChange={fileChangedHandler}
  />
  </Button>
  
  {selectedFiles
  ?<Button variant="contained" component="span" onClick={onClickHandler}>Upload</Button>
  :<Button variant="contained" component="span" onClick={onClickHandler}  disabled>Upload</Button>
  }
  {/* <Button variant="contained" component="span" onClick={onClickHandler}  disabled> */}
    {/* Upload
  </Button> */}
                  {/* <Button>
                Upload
                </Button> */}
            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >
              ????????? ??????
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Button>
                DELETE
                </Button>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              ????????? ???????????? ??????
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              5?????? ??? {usingDisk}MB
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          ????????? ????????? ??? ????????? ??? ??????
        </Box>
      </Card>

      <Card>
        {selectedFiles
        ?nameviewer(selectedFiles)
        :null
        }
        {cleanUpLoad}
        
        
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
