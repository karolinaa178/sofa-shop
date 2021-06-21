import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#171717" color="white">
        <Container maxWidth="lg">
          <Grid container spaceing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box pb={{xs: 3, sm: 2}} pt={{xs: 5}}>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box pb={{xs: 3, sm: 2}}>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box pb={{xs: 3, sm: 2}}>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box pb={{xs: 3, sm: 2}} pt={{xs: 5}}>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box pb={{xs: 3, sm: 2}}>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social media</Box>
              <Box pb={{xs: 3, sm: 2}} pt={{xs: 5}}>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box pb={{xs: 3, sm: 2}}>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{xs: 5, sm: 0}} >
            Style29 &reg; 2021
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;