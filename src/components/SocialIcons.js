import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://www.facebook.com/DesignerPrajjwal">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pandeyprajjwal/">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
