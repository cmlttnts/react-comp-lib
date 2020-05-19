/* 
format of navigation pattern
navs = [
  nav_object1,
  nav_object2,
]
nav_object = {
  uName: "Unique Name To Differentiate in CSS",
  uKey: "If it has a dropdown button, needs a unique key",
  items: [nav_item_object1, nav_item_object2 ...]
}

nav_item_object = {
  type: "link or drop",
  text: "text to display",
  link: "if it is link, where to go"
  //if it is drop, dropdown menu items array
  items: [nav_item, nav_item...]
}

*/

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
