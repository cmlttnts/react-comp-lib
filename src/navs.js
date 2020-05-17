const navs = [
  {
    uName: "topnav0",
    items: [
      {
        type: "link",
        text: "Home",
        link: "#home",
      },
      {
        type: "link",
        text: "About",
        link: "#about",
      },
      {
        type: "link",
        text: "Contact",
        link: "contact",
      },
      {
        uName: "drop0",
        type: "drop",
        text: "Drop",
        items: [
          {
            type: "link",
            text: "drop1",
            link: "#home",
          },
          {
            type: "link",
            text: "drop2",
            link: "#about",
          },
          {
            type: "link",
            text: "drop3",
            link: "#contact",
          },
        ],
      },
    ],
  },
  {
    uName: "midnav0",
    items: [
      {
        type: "link",
        text: "Home",
        link: "#home",
      },
      {
        type: "link",
        text: "About",
        link: "#about",
      },
      {
        type: "link",
        text: "Contact",
        link: "contact",
      },
      {
        uName: "drop0",
        type: "drop",
        text: "Drop",
        items: [
          {
            type: "link",
            text: "Home",
            link: "#home",
          },
          {
            type: "link",
            text: "About",
            link: "#about",
          },
          {
            type: "link",
            text: "Contact",
            link: "contact",
          },
        ],
      },
    ],
  },
];

export default navs;
