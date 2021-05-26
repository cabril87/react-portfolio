
// eslint-disable-next-line 
export default {
  nav: {
    logo: 'CC',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/computer.jpg',
    text: ['Hi!', "It's me, Carlos.", 'I am '],
    typical: [
      'Web developer. 🖥',
      2000,
      'Cinematographer. 📹',
      2000,
      'Animation Enthusiast',
      2000,
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/html_css.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/react.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/js.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/mySql.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/bootstrap.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'node',
      },
    ],
    desc: `In the developement world there are alot of options. Its a playground of endless possibilities. Listed above are some of the frameworks, libraries, and languages I have ultilized to create applications and websites`,
  },
  card: {
    img: [
      process.env.PUBLIC_URL + '/assets/readicon.png',
      process.env.PUBLIC_URL + '/assets/todoicon.png',
      process.env.PUBLIC_URL + '/assets/covidicon.png',
      process.env.PUBLIC_URL + '/assets/fiticon.png',

    ]
  }
    
  
  
,
  bg: {
    img: process.env.PUBLIC_URL + '/assets/FL.svg'
  }
};