const fs = require('fs');
const prettier = require('prettier');
const prettierConfig = require('../../prettier.config');
// All languages present in the file system
const files = fs.readdirSync('dist/json-imports');

let content;

// No i18n - just import dependencies, if any
if (files.length === 0) {
  content = ``;
  // There is i18n - generate the full file
} else {
  // Actual imports for json assets
  content = files.map((key) => `import './json-imports/${key}';`).join('\n');
}

fs.writeFileSync('dist/Assets.js', prettier.format(content, prettierConfig));
