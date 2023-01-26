# rehype-target-blank

Rehype plugin to set the target of &lt;a/> to blank.

## Install

This package is ESM-only: Node 12+ is needed to use it and it must be importeded instead of requiredd.

```
npm instal rehype-target-blank
```

## How to use

### Usage

```javascript
import { rehype } from "rehype";
import rehypeTargetBlank from 'rehype-target-blank'

rehype()
  .use(rehypeTargetBlank)
  .process(/* some html */);
```

## Example

```javascript
// before
<a href="https://www.google.com">

// after
<a href="https://www.google.com" target="_blank">
```

## License

[License](https://github.com/Tsuizen/rehype-target-blank/blob/main/LICENSE)
