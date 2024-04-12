import React from "react";
import styled from "styled-components";
import EarthCanvas from "../canvas/Earth";
import { LinkedIn, Instagram, GitHub, Twitter, Mail, Phone } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 24px 80px 24px;
  gap: 12px;
  @media (max-width: 960px) {
    padding: 0px 16px 80px 16px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {

  const handleContact = (contact) => {
    switch (contact) {
      case "linkedin":
        window.open("https://www.linkedin.com/in/manishjadhav9");
        break;
      case "instagram":
        window.open("https://www.instagram.com/maanishjadhav_");
        break;
      case "github":
        window.open("https://github.com/manishjadhav9");
        break;
      case "twitter":
        window.open("https://twitter.com/manishjadhav28");
        break;
      case "gmail":
        window.open("mailto:manishsj289@gmail.com");
        break;
      case "phone":
        window.open("tel:+919028992643");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Have an idea? Let's collaborate and create amazing together!
        </Desc>
        <ContactIcons>
          <IconLink onClick={() => handleContact("linkedin")}><LinkedIn /></IconLink>
          <IconLink onClick={() => handleContact("gmail")}><Mail /></IconLink>
          <IconLink onClick={() => handleContact("phone")}><Phone /></IconLink>
          <IconLink onClick={() => handleContact("github")}><GitHub /></IconLink>
          <IconLink onClick={() => handleContact("twitter")}><Twitter /></IconLink>
          <IconLink onClick={() => handleContact("instagram")}><Instagram /></IconLink>
        </ContactIcons>
        <Desc>
          &copy; 2024 Manish Jadhav. All rights reserved.
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default Contact;
