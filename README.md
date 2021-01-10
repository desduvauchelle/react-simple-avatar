# @hashup/react-simple-avatar

> A simple React avatar component to display either their avatars or their initials

View [DEMO](https://desduvauchelle.github.io/react-simple-avatar/)

[![NPM](https://img.shields.io/npm/v/react-simple-avatar.svg)](https://www.npmjs.com/package/react-simple-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @hashup/react-simple-avatar
```

## Usage

```jsx
//
// React class
//
import React, { Component } from 'react'

import Avatar from '@hashup/react-simple-avatar'
import '@hashup/react-simple-avatar/dist/index.css'

class Example extends Component {
  render() {
    return <Avatar name="Denis" />
  }
}

//
// React function
//
import React, { Component } from 'react'

import Avatar from '@hashup/react-simple-avatar'
import '@hashup/react-simple-avatar/dist/index.css'

const MyApp = () => {
  return <Avatar name="Denis" />
}
```

## Attributes

| Name | Default | Type | Description |
|----|----|----|----|
|name|""|`String`|Name of the person|
|avatarUrl|""|`String`|URL for the avatar (will revert to color and initial if image can't load)|
|className|""|`String`|Add your own CSS class name to the wrapper|
|size|50|`Number`|Size in pixels of the avatar|
|borderRadius|50%|`String`|Border radius of the avatar in pixels|
|backgroundColor|"#8E8E8E"|`String`|Background color for initials|
|textColor|"#F1F1F1"|`String`|Text color for the initials|
|enableTooltip|true|`Bool`|Enable tooltips on mouse over of the avatar|
|tooltipDirection|"top"|`String`|Options: top, bottom, left, right|
|tooltipTextColor|"#FFFFFF"|`String`|Text color for the tooltip|
|tooltipBackgroundColor|"#000000"|`String`|Background color for the tooltip|
|tooltipMargin|30|`Number`|Offset of the tooltip|
|tooltipArrowSize|6|`Number`|Size of the arrow|
|tooltipDelay|200|`Number`|Delay before the tooltip appears|
|style|{}|`Object`|Pass custom styles to the wrapper|

## License

MIT © [desduvauchelle](https://github.com/desduvauchelle)


## Notes to self

To publish on npm:

```bash
npm publish
```
