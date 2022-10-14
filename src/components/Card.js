import { useContext } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "@mui/material/Link";

import Context from "../context";
import React from "react";

const StyledCard = styled.li`
  cursor: pointer;
  border: 2px solid red;

  width: 370px;
  min-height: 300px;
  padding: 35px 30px;
  margin-top: 20px;

  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    transition: 0.6s;

    border: 1px solid #9c27b0;
    box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px,
      rgba(255, 255, 255, 0.4) 0px 0px 999px 999px;
    z-index: 500;
  }

  &:not(:hover) {
    transition: 1.5s;
  }
`;

const ContactContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Card = ({ title, phone, email }) => {
  const { showModal } = useContext(Context);
  return (
    <StyledCard onClick={() => showModal(true, title)}>
      <Typography variant="h5" mb={2}>
        {title}
      </Typography>
      <ContactContainer>
        <PhoneIphoneIcon color="secondary" />
        <Typography variant="body1" ml={0.8}>
          <Link href={`tel:${phone}`} color="inherit" underline="none">
            {phone}
          </Link>
        </Typography>
      </ContactContainer>
      <ContactContainer>
        <MailOutlineIcon color="secondary" />
        <Typography variant="body1" ml={0.8}>
          <Link href={`mailto:${email}?subject=Let's contact`} color="inherit">
            {email}
          </Link>
        </Typography>
      </ContactContainer>
    </StyledCard>
  );
};

export default Card;
