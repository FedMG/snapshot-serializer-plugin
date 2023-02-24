// import * as cheerio from "cheerio";
// import { format as prettyFormat } from "pretty-format";
// import { Anchor } from "src/utils/components";

// const removeAttributes = (element) => {
//   const attributes = Object.values(element.attributes);
//   if (attributes.length === 0) return ''

//   attributes.forEach((attr) => {
//     if (attr.name !== 'data-test-id') {
//       element.removeAttribute(attr.name);
//     }
//   });

//   return element;
// };

// const plugin1 = {
//   serialize(value, config, indentation, depth, refs, printer) {
//     const updatedValue = removeAttributes(value);
//     // return printer(updatedValue, config, indentation, depth, refs);
//   },
//   test(value) {
//     return value && typeof value === 'object' && value.tagName;
//   }
// };

// const plugin2 = {
//   test(val) {
//     // return Array.isArray(val);
//     // return val && typeof val === 'string';
//     // return val && typeof val === 'object' && val.tagName;
//   },
//   serialize(val, config, indentation, depth, refs, printer) {
//     // console.log(val.tagName)
//     // console.log(config)
//     // console.log(indentation)
//     // console.log(depth)
//     // console.log(refs)
//   },
//   print(val) {
//     // val
//   }
// };

// serialize(value, config, indentation, depth, refs, printer) {
//   const tag = value.tagName.toLowerCase();
//   const attributes = Object.keys(value.attributes)
//     .map((key) => `${key}="${value.attributes[key]}"`)
//     .join(' ');

//   return `<${tag} ${attributes} />`;
// },

// const plugin3 = {
//   test(val) {
//     return val && val.$$typeof === Symbol.for('react.test.json');
//   },
//   serialize(value, config, indentation, depth, refs, printer) {
//     const $ = cheerio.load(value);
//     const tag = $.root().children()[0].name;
//     const attributes = $.root().children()[0].attribs;
//     const attributesString = Object.entries(attributes)
//       .map(([key, val]) => `${key}="${val}"`)
//       .join(' ');

//     return `<${tag} ${attributesString} />`;
//   },
// };

// const clone = element.cloneNode(true);
// const name = object.constructor.name;
// console.log(name)

// module.exports = plugin;
// export default plugin;

export {};
