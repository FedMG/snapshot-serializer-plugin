import { render } from "@testing-library/react"

describe("Serializer outputs", () => {
  describe("When running the tests", () => {
    it("Should always renders an anchor without attributes except data-testid #unit", () => {
      // Arrange
      const Component = () => (<a href="www.instagram.com" className="mt-8" data-testid='anchor-test' />)
      
      // Act
      const { getByRole } = render(<Component />)
      
      // Assert
      expect(getByRole("link")).toMatchInlineSnapshot(`
<a data-testid='anchor-test'>

</a>
`)
    })
    
    it("Should renders div container with self-closed elements and a textNode value as children #unit", () => {    
      // Arrange
      const Component = () =>(
        <div data-testid="test" className="w-full bg-[#000000] text-white px-4 pt-4">
          <div data-testid="attribute-test" className="new-div"></div>
            This text
          <hr data-testid="attribute-test" className="m-2" />
        </div>
      )
      
      // Act
      const { getByTestId } = render(<Component />)
      
      // Assert
      expect(getByTestId('test')).toMatchInlineSnapshot(`
<div data-testid='test'>
  <div data-testid='attribute-test'>

  </div>
  This text
  <hr data-testid='attribute-test'/>
</div>
`)
    })


    it("Should renders nested divs with textNodes in differents levels and paragraph element #unit", () => {    
      // Arrange
      const Component = () => (
        <div data-testid="test" className="flex text-center pt-2 sm:text-end">
          top
          <div id='5' data-testid="attribute-test">
            <p className='underline'>first paragraph</p>
          </div>
          middle
        </div>
      )
      // Act
      const { getByTestId } = render(<Component />)
      
      // Assert
      expect(getByTestId('test')).toMatchInlineSnapshot(`
<div data-testid='test'>
  top
  <div data-testid='attribute-test'>
    <p>
      first paragraph
    </p>
  </div>
  middle
</div>
`)
    })

    it("Should renders a div with two nodes a paragraph with a text and a textNode #unit", () => {    
      // Arrange
      const Component = () => (
        <div data-testid="test" className="w-full text-sm">
          <p data-testid="attribute-test" className='bg-gray-200'>This is a paragraph</p>
          Bottom
        </div>
      )
      // Act
      const { getByTestId } = render(<Component />)
      
      // Assert
      expect(getByTestId('test')).toMatchInlineSnapshot(`
<div data-testid='test'>
  <p data-testid='attribute-test'>
    This is a paragraph
  </p>
  Bottom
</div>
`)
    })    
  })
})
