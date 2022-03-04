import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h3"
          >
            Deep Learning Application
          </Typography>
          <br/>
          <br/>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            딥러닝 웹 어플리케이션 사용 방법 <br/><br/>
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            1. 로그인(Login) 또는 회원가입(Register) <br/>
            2. 학습하고자 하는 이미지 데이터들을 업로드(Account Data -> UPLOAD) <br/>
            2-1. 이때 파일명의 양식이 필요함 "라벨_*" 형식이 요구됨.
            <br/>
            3. 학습(Deep Learning -> FIT) <br/>
            4. 대조하고자 하는 이미지 업로드(Deep Learning UPLOAD) <br/>
            5. 결과 출력(Deep Learning)
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalProfit;
