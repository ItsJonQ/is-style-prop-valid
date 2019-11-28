# is-style-prop-valid

> Utilities for CSS style properties

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
