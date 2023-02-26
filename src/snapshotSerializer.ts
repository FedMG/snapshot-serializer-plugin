const SELF_CLOSING_TAGS = ["br", "img", "input", "meta", "link", "hr"];
const VALID_ATTRIBUTES = ["data-test-id"];

function renderIndentedElement(node, config, nextIndent, depth, refs, printer) {
  if (node.length === 0) return ''
  
  const prevIndent = nextIndent + config.indent
  const { spacingOuter } = config

  return (
    spacingOuter + Object.values(node.children).map((item) => {
      return prevIndent + printer(item, config, prevIndent, depth, refs)
    }).join(spacingOuter) + spacingOuter
     + nextIndent
  );
}

const plugin = {
  serialize(nodeObject, config, indent, depth, refs, printer) {    
    const tagName = nodeObject.tagName.toLowerCase()
    const attrReference = Object.values(nodeObject.attributes)

    const attributes = attrReference.filter(({ name }) => VALID_ATTRIBUTES.includes(name))
    .map(({ name, value }) => ` ${name}='${value}'`).join(' ') ?? ''
    
    if (SELF_CLOSING_TAGS.includes(tagName)) {
      return `<${tagName}${attributes}/>`;
    }
    
    return `<${tagName}${attributes}>${renderIndentedElement(
          nodeObject,
          config,
          indent,
          depth,
          refs,
          printer,
        )}</${tagName}>`;
  },
  test(value: unknown) {
    return value && typeof value === "object" && value.tagName;
  },
};

module.exports = plugin;
