import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';


import axios from 'axios'
import { useSelector } from 'react-redux';
import { useState } from 'react';


const AccountProfile = (props) => {
  const loginstate = useSelector(state => state.loggin);
  const [cloudList, setCloudList] = useState(null);


  const user = {
    avatar: '/static/images/avatars/download.jpg',
    city: 'Los Angelesasd',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: loginstate.email
  };



  const cloudviewer2 = e => {
    var arr = [];
    // for (var i=0; i<e.length; i++){
    //   arr.push(<li>{e[i].name}</li>)
    // }
    arr = e.map((ev, idx) =>
    <li>{idx}. {ev.name}</li>
    )

    arr = arr.map((name, idx) =>
      <ol>{name}</ol>
    )
    // console.log(arr);
    return arr
  };


  const cloudviewer = () => {
      axios.get('http://localhost:4000/imginfo').then(function (response) {
        setCloudList(cloudList => cloudList = response.data);
        // console.log(response.data);
  })};



  return(
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${moment().format('hh:mm A')} ${user.timezone}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="outlined"
        onClick={cloudviewer}
      >
        클라우드 저장소 조회
      </Button>
    </CardActions>

     <Card>

      {cloudList
      ?cloudviewer2(cloudList)
      :null
      }

     </Card>
  </Card>
);
}

export default AccountProfile;


