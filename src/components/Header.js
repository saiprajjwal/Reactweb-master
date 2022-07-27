import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/DP Logo 1.png" alt="" />
          <Button>Portfolio</Button>
        </Nav>

        <Flex>
          <div>
            <h1>UX & UI Designer</h1>

            <p>
              UI/UX designer's job is to create user-friendly interfaces that
              enable users to understand how to use complex technical products.
              If you're passionate about the latest technology trends and
              devices, you'll find great fulfillment in being involved in the
              design process for the next hot gadget.
            </p>

            <Button bg="#FFA70B" color="#fff">
              Learn More
            </Button>
          </div>

          <Image src="./images/Signature Icon.png" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
