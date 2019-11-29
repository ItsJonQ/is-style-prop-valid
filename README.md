# is-style-prop-valid

[![Build Status](https://travis-ci.org/ItsJonQ/is-style-prop-valid.svg?branch=master)](https://travis-ci.org/ItsJonQ/is-style-prop-valid)
[![Coverage Status](https://coveralls.io/repos/github/ItsJonQ/is-style-prop-valid/badge.svg?branch=master)](https://coveralls.io/github/ItsJonQ/is-style-prop-valid?branch=master)
[![Bundle size](https://badgen.net/bundlephobia/minzip/is-style-prop-valid)](https://bundlephobia.com/result?p=is-style-prop-valid)

> Utilities for CSS style properties

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Usage](#usage)
-   [Utilities](#utilities)
    -   [isStylePropValid(prop)](#isstylepropvalidprop)
    -   [sanitizeStyleProps(props)](#sanitizestylepropsprops)
    -   [isUnitlessValue(prop)](#isunitlessvalueprop)
    -   [convertUnitValue(prop, value)](#convertunitvalueprop-value)
-   [Related](#related)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save is-style-prop-valid
```

## Usage

A great use-case for these utilities is to prepare [object styles](https://emotion.sh/docs/object-styles) for libraries like [Emotion](https://emotion.sh/docs/introduction) or [Style Components](https://www.styled-components.com/) for use within [React](https://reactjs.org/).

##### Example

```jsx
import styled from "@emotion/styled";
import { sanitizeStyleProps } from "is-style-prop-valid";

const CustomView = styled.div({}, sanitizeStyleProps);

const Example = () => {
	return <CustomView background="red" padding={10} />;
};
```

---

## Utilities

### isStylePropValid(prop)

Determines if the prop is valid style [CSSProperty](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

###### prop

Type: `string`

##### Example

```js
import { isStylePropValid } from "is-style-prop-valid";

isStylePropValid("background");
// true

isStylePropValid("role");
// false
```

---

### sanitizeStyleProps(props)

Removes non style CSSProperty props from an object. Converts non-unitless values to px values.

###### props

Type: `object`

##### Example

```js
import { sanitizeStyleProps } from "is-style-prop-valid";

const props = {
	background: "red",
	onClick: () => undefined,
	padding: 10,
	zIndex: 50
};

sanitizeStyleProps(props);
// {
//     background: 'red',
//     padding: '10px',
//     zIndex: 50
// }
```

---

### isUnitlessValue(prop)

Determines if the CSSProperty is a unitless value. For example, `lineHeight`.

###### prop

Type: `string`

##### Example

```js
import { isUnitlessValue } from "is-style-prop-valid";

isUnitlessValue("lineHeight");
// true

isUnitlessValue("padding");
// false
```

---

### convertUnitValue(prop, value)

###### prop

Type: `string`

###### value

Type: `number`|`string`

###### Returns

Type: `number`|`string`

##### Example

```js
import { convertUnitValue } from "is-style-prop-valid";

convertUnitValue("padding", 10);
// 10px

convertUnitValue("zIndex", 10);
// 10
```

## Related

-   [@emotion/is-prop-valid](https://github.com/emotion-js/emotion/tree/master/packages/is-prop-valid)
