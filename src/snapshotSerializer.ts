const VALID_ATTRIBUTES = ["data-test-id"];
const SEPARATOR = "";
const removeAttributes = (
  element,
  config,
  indentation,
  depth,
  refs,
  printer
) => {
  if (element.attributes.length === 0) return "";
  
  Object.values(element.attributes).forEach((attr) => {
    if (!VALID_ATTRIBUTES.includes(attr.name)) {
      element.removeAttribute(attr.name)
    }
  });

  const indentationItems = indentation + config.indent;

  return (
    config.spacingOuter +
    Object.values(element.attributes).map(({name, value}) => {
      if (name.length + value.length >= 50) {
        return (
          indentationItems + printer(`${name}='${value}'`, config, indentationItems, depth, refs)
        );
      }
      return printer(`${name}='${value}'`, config, indentationItems, depth, refs);
    }).join(SEPARATOR + config.spacingInner) + config.spacingOuter + indentation
  );

  // return (
  //   config.spacingOuter +
  //   // "" +

  //   //   element.childNodes.forEach(
  //   //     attr =>
  //   //       indentationItems +
  //   //       printer('', config, indentationItems, depth, refs), // callback
  //   //   ) +
  //   // .join(SEPARATOR + config.spacingInner) +
  //   (config.min ? "" : SEPARATOR) + // following the last item
  //   config.spacingOuter +
  //   indentation
  // );
};

const SELF_CLOSING_TAGS = ["br", "img", "input", "meta", "link", "hr"];


const getNestedTagElements = (object, config, indentation, depth, refs, printer) => {
  console.log(Object.values(object.childNodes))
  // object.childNodes[0].nodeValue
  if (Object.values(object.childNodes).length === 0) return ''
  
  return printer(object.childNodes, config, indentation, depth, refs, printer)
}


const plugin = {
  serialize(
    object: any,
    config: any,
    indentation: any,
    depth: any,
    refs: any,
    printer: any
  ) {
    const tagName = object.tagName.toLowerCase();
    
    return `${
      SELF_CLOSING_TAGS.includes(tagName)
        ? `<${tagName} ${removeAttributes(
            object,
            config,
            indentation,
            depth,
            refs,
            printer
          ).split('"')[1] }/>`
        : `<${tagName} ${removeAttributes(object, config, indentation, depth, refs, printer).split('"')[1] ?? ''}>
        ${printer(object.childNodes, config, indentation, depth, refs) /*getNestedTagElements(object, config, indentation, depth, refs, printer)*/}
        </${tagName}>`
    }`;
  },
  test(value: any) {
    return value && typeof value === "object" && value.tagName;
  },
};

module.exports = plugin;
