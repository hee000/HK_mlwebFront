import { useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

import { logIn, logOut } from '../_reduxmodules/loginstore';
import { useSelector, useDispatch } from 'react-redux';
import { AdbSharp } from '@material-ui/icons';



var falseuser = {
  avatar: '/static/images/avatars/avatar_0.png',
  jobTitle: '__',
  name: 'plese, sign in'
};

const falseitems = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
];

const trueitems = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/deeplearning_training',
    icon: ShoppingBagIcon,
    title: 'Deep Learning'
  },
  {
    href: '/app/fitted_model',
    icon: ShoppingBagIcon,
    title: 'Fitted Model'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account Data'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const loginstate = useSelector(state => state.loggin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut_ = () => dispatch(logOut());

  var trueuser = {
    avatar: '/static/images/avatars/download.jpg',
    jobTitle: '_로그인되었습니다_',
    name: loginstate.email
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  if (loginstate.logingged) {
    var user = trueuser;
    var items = trueitems;
  } else {
    var user = falseuser;
    var items = falseitems;
  }

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >


<Box
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      p: 2
    }}
    >
      <Avatar
        component={RouterLink}
        src={user.avatar}
        sx={{
          cursor: 'pointer',
          width: 64,
          height: 64
        }}
        to="/app/account"
      />
      <Typography
        color="textPrimary"
        variant="h5"
      >
        {user.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="body2"
      >
        {user.jobTitle}
      </Typography>
    </Box>



      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>

      {loginstate.logingged
      ?(<>
      <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            m: 2,
            p: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 2
            }}
          >

          {/* <Link to="/app/dashboard" > */}
            <Button
              color="primary"
              component="a"

              component={RouterLink}
              to="/app/dashboard"
              
              variant="contained"
              size="large"
              onClick={() => {
                logOut_();
                // navigate('/app/dashboard', { replace: true });
              }}
            >
              LogOut
            </Button>
          {/* </Link> */}
          </Box>
        </Box>  
        </>
        )
      : null
      }





    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xlDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default DashboardSidebar;