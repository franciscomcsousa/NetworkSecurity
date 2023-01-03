import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom'

const sections = [
  { title: 'Chinese', url: '/book' },
  { title: 'Indian', url: '/book' },
  { title: 'Italian', url: '/book' },
  { title: 'Portuguese', url: '/book' },
  { title: 'Greek', url: '/book' },
  { title: 'Spanish', url: '/book' },
  { title: 'Moroccan', url: '/book' },
  { title: 'Turkish', url: '/book' },
  { title: 'Thai', url: '/book' },
  { title: 'French', url: '/book' },
];

function Header(props) {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small" onClick={() => window.location.href = '/restaurant'}>Restaurant Owner </Button>
        <Box
        m={1} //margin
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft={42}
        paddingRight={42}
        >
        <Button size="large" variant="text" color="inherit" onClick={() => navigate('/', {replace: true})}>{title}</Button>
        </Box>
        <Box
          paddingRight={3}
          paddingBottom={0.5}
        > <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Button variant="outlined" size="small" onClick={() => window.location.href = '/register'}>
          Register
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;