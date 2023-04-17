import type { Config, Printer } from 'pretty-format' 

const SELF_CLOSING_TAGS = ["br", "img", "input", "meta", "link", "hr"]
const VALID_ATTRIBUTES = ["data-test-id"]

function renderIndentedElement(node: HTMLElement, config: Config, nextIndent: string, depth: number, refs: HTMLElement[], printer: Printer) {
  const prevIndent = nextIndent + config.indent
  const { spacingOuter } = config

  return (
    spacingOuter + Object.values(node.childNodes).map((item) => {
      if (item.nodeValue ?? (typeof item.nodeValue === 'string' && item.nodeName === '#text')) {
        return prevIndent + item.nodeValue
      }
      
      return prevIndent + printer(item, config, prevIndent, depth, refs)
    }).join(spacingOuter) + spacingOuter
     + nextIndent
  )
}

export const plugin = {
  serialize(nodeObject: HTMLElement, config: Config, indent: string, depth: number, refs: HTMLElement[], printer: Printer) {    
    const tagName = nodeObject.tagName.toLowerCase()
    const attributes = Object.values(nodeObject.attributes)

    const filteredAttributes = attributes.filter(({ name }) => VALID_ATTRIBUTES.includes(name))
    .map(({ name, value }) => ` ${name}='${value}'`).join(' ') ?? ''
    
    if (SELF_CLOSING_TAGS.includes(tagName)) {
      return `<${tagName}${filteredAttributes}/>`
    }
    
    return `<${tagName}${filteredAttributes}>${renderIndentedElement(
          nodeObject,
          config,
          indent,
          depth,
          refs,
          printer,
        )}</${tagName}>`
  },
  test(value: any) {
    return value !== null && typeof value === 'object' && value.tagName
  },
}

module.exports = plugin
