
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
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};