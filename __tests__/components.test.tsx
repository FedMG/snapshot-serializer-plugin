import { render } from "@testing-library/react";

import { Anchor } from "src/components/anchor";
import { Footer } from "src/components/footer";

describe("Anchor component", () => {
  it("should renders an anchor with a path and route props", () => {
    const { getByRole } = render(
      <Anchor path="www.instagram.com" route="Instagram" />
    );
    expect(getByRole("link")).toMatchInlineSnapshot(`
<a data-test-id='testing'>
        NodeList [
  Instagram,
]
        </a>
`);
  });
});

describe("Footer component", () => {
  describe("When a links object is not passed through links property #accessibility #ui", () => {
    it("Then should renders a Footer only with a copyright text", () => {
      // Arrange
      const linksPropertyValue = undefined;

      // Act
      const { getByRole } = render(
        <Footer links={linksPropertyValue as any} />
      );

      // Assert
      expect(getByRole("contentinfo")).toMatchInlineSnapshot(`
<footer
  class= w-full bg-[#000000] text-white px-4 pt-4
>
  <div
    class=flex text-center pt-2 sm:text-end
  >
    <div
      class=w-full text-sm
    >
      <p>
        © 
        2023
         e-commerce
      </p>
    </div>
  </div>
</footer>
`);
    });
  });
});
