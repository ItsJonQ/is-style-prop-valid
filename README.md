# is-style-prop-valid

> Utilities for CSS style properties

## Installation

```
npm install --save is-style-prop-valid
```

## Usage

### isStylePropValid(prop)

Determines if the prop is valid style [CSSProperty](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

##### prop

Type: `string`

```js
import { isStylePropValid } from "is-style-prop-valid";

isStylePropValid("background");
// true

isStylePropValid("role");
// false
```

### isUnitlessValue(prop)

Determines if the CSSProperty is a unitless value. For example, `lineHeight`.

##### prop

Type: `string`

```js
import { isUnitlessValue } from "is-style-prop-valid";

isUnitlessValue("lineHeight");
// true

isUnitlessValue("padding");
// false
```
