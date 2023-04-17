import { render } from "@testing-library/react"

import { Anchor } from "src/components/anchor"
import { Footer } from "src/components/footer"


describe("Anchor component", () => {
  describe("When link and name of the link are passed", () => {
    it("Should renders an anchor without properties only with data-testid", () => {
      // Arrange

      // Assert
      const { getByRole } = render(
        <Anchor path="www.instagram.com" route="Instagram" />
      )
      // Assert
      expect(getByRole("link")).toMatchInlineSnapshot(`
<a data-testid='testing'>
  Instagram
</a>
`)
    })
  })
})

describe("Footer component", () => {
  describe("When a links object is not passed through links property #accessibility #ui", () => {
    it("Then should renders a Footer only with a copyright text", () => {
      // Arrange
      const linksPropertyValue = undefined

      // Act
      const { getByRole } = render(
        <Footer links={linksPropertyValue as any} />
      )

      // Assert
      expect(getByRole("contentinfo")).toMatchInlineSnapshot(`
<footer>
  <div>
    <p>
      &copy 
      2023
       e-commerce
    </p>
    Bye
  </div>
</footer>
`)
    })
  })
})
