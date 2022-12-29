import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
//import Main from './Main';
//import Sidebar from './Sidebar';
//import Footer from './Footer';
//import post1 from './blog-post.1.md';
//import post2 from './blog-post.2.md';
//import post3 from './blog-post.3.md';

//TODO
const sections = [
  { title: 'Chinese', url: '#' },
  { title: 'Indian', url: '#' },
  { title: 'Italian', url: '#' },
  { title: 'Portuguese', url: '#' },
  { title: 'Greek', url: '#' },
  { title: 'Spanish', url: '#' },
  { title: 'Moroccan', url: '#' },
  { title: 'Turkish', url: '#' },
  { title: 'Thai', url: '#' },
  { title: 'French', url: '#' },
];

//TODO
const mainFeaturedPost = {
  title: 'The Cork',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

//TODO
const featuredPosts = [
  {
    title: 'Gift a Card!',
    date: 'your friends will be happy...',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://images.wsj.net/im-581988/M',
    imageLabel: 'Image Text',
    link: "/gift_cards",
  },
  {
    title: 'Do you have a Gift Card?',
    date: 'Redeem it here!',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000',
    imageLabel: 'Image Text',
    link: "/redeem_cards"
  },
];

//const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Fast and Delicious" sections={sections}/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}