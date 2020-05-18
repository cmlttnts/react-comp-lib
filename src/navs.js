const navs = [
  {
    uName: "topnav0",
    uKey: "but0",
    items: [
      {
        type: "link",
        text: "Home",
        link: "javascript:void(0)",
      },
      {
        type: "link",
        text: "About",
        link: "javascript:void(0)",
      },
      {
        type: "link",
        text: "Contact",
        link: "javascript:void(0)",
      },
      {
        uName: "but0 1",
        uKey: "but0_1",
        type: "drop",
        text: "Contact",
        items: [
          {
            type: "link",
            text: "Drop 1",
            link: "https://www.google.com.tr",
          },

          {
            type: "link",
            text: "Drop 2",
            link: "javascript:void(0)",
          },
          {
            type: "link",
            text: "Drop 3",
            link: "javascript:void(0)",
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
        link: "javascript:void(0)",
      },
      {
        type: "link",
        text: "About",
        link: "javascript:void(0)",
      },
      {
        type: "link",
        text: "Contact",
        link: "javascript:void(0)",
      },
      {
        uName: "but2",
        type: "drop",
        text: "Drop",
        items: [
          {
            type: "link",
            text: "Home",
            link: "javascript:void(0)",
          },
          {
            type: "link",
            text: "About",
            link: "javascript:void(0)",
          },
          {
            type: "link",
            text: "Contact",
            link: "javascript:void(0)",
          },
        ],
      },
    ],
  },
];

export default navs;
