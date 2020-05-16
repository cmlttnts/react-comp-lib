import React from "react";
import NavItem from "./NavItem/NavItem";

function parseNavItems(items, uName) {
  return items.map((item, index) => (
    <NavItem
      key={index}
      type={item.type}
      link={item.link}
      text={item.text}
      items={item.items}
      uName={uName + (item.uName ? "-" + item.uName : "-item")}
    />
  ));
}

export default parseNavItems;
