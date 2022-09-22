# Things I'd like to improve
- The following are changes I'd like to make given more time on the project! As of yet, the project is close to mvp. 
  
## Navbar
- Better buttons!
- React-router functionality for the navigation links
- Animation for mobile hambuger menu click
- Clean up look of Hamburger menu

## First section
- Larger video preview
- Figure out different way to add video other than html embed. Seems like a security risk.

## Mission
- Figure out better way to incorperate images... Feels clumsy

## Leaders
- Larger images? If possible..

## Investors
- TBD

## Footer
- Less space between sublinks!!!!
- React-router functionality for links
- Sublinks for mobile view

## General styling
- Remove redundant css
- Fix font in buttons
- Fix h1 title in first section

# Note on testing:
- As of right now, the frame work for unit tests is built out, but I'd like to incorperate mobile view testing and integration testing for the http calls that are being made. 
- Currently I am testing that one piece of each component is being rendered, and a snapshot file of the html is being written, to be compared with incoming changes. If a change is made that passes the render test is incongruent with the snapshot the dev receives a warning about the component not matching the snapshot. The dev can then update the snapshot using 'u'.