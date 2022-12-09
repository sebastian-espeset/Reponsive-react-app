import React from "react";

import {
  StyledDropDownContainer,
  StyledUnorderedList,
} from "./styles/Dropdown.style";

export default function Dropdown({ dropdownItems }) {
  //returns an unordered list with a list item for each dropdownItem prop
  console.log(dropdownItems);
  return (
    <StyledDropDownContainer>
      {dropdownItems ? (
        <StyledUnorderedList>
          {dropdownItems.map((item) => (
            <li>{item}</li>
          ))}
        </StyledUnorderedList>
      ) : null}
    </StyledDropDownContainer>
  );
}
