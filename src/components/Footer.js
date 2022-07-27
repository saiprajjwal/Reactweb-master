import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/DP Logo 1.png" alt="" />

        <Flex>
          <ul>
            <li>
              Experienced UI/UX Designer with more than 5 years experience
              excited to help in creating creative assets. My technical
              expertise and outside-the-box thninking will provide to be
              valuable addition to the company’s creative teams and personal
              contributions.
            </li>
            <li>+1-XXX XXX XXXX</li>
            <li>designerprajjwal@prajjwal.com</li>
          </ul>
          <ul>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li>Tesimonial</li>
            <li>Blog</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Prajjwal. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
