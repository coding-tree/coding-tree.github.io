import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  @media only screen and (max-width: 320px) {
    width: 320px;
  }
`;

const StyledHeader = styled.h1`
  color: #fff;
  text-align: left;
`;

const StyledItem = styled.div`
  margin-bottom: 2rem;
  color: #fff;
  font-size: 1rem;
  text-align: justify;
`;

const LinkWrapper = styled.div`
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const StyledLink = styled.a`
  display: flex;
  padding: 1rem 0 2rem 0;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: #f0938c;
  }
`;

const StyledIcon = styled.i`
  padding-right: 0.5rem;
`;

function Regulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <StyledWrapper>
      <StyledHeader>Regulamin</StyledHeader>
      <LinkWrapper>
        <StyledLink as={Link} to="/">
          <StyledIcon className="fas fa-arrow-left"></StyledIcon> Powrót do
          strony głównej
        </StyledLink>
      </LinkWrapper>
      <StyledItem>
        §1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vel
        molestiae cum odit nesciunt neque cumque perferendis veniam, nobis vitae
        iusto corporis beatae explicabo dicta saepe voluptatum facere recusandae
        similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        eveniet, ipsa ipsum possimus, error unde earum maxime quos nostrum
        voluptatibus quaerat at quibusdam consequatur temporibus ipsam officiis
        ducimus aliquam minima? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Asperiores aliquam facere qui, recusandae libero
        ducimus rerum exercitationem, est sint autem perspiciatis. Eaque
        reprehenderit sapiente labore, nemo esse ducimus? Quas, optio!
      </StyledItem>
      <StyledItem>
        §2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        nihil magnam fugit unde deserunt. Aliquid at vitae, aut ratione alias
        eos autem ullam repudiandae error enim. Molestiae enim dicta totam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        assumenda quisquam ipsum vel aspernatur porro illum soluta laudantium
        perferendis! Nihil eum sit quia atque mollitia veniam cum distinctio
        vel! Nihil. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Reiciendis debitis natus quaerat odit possimus beatae perferendis,
        dolore, eaque illum explicabo dolor adipisci, rem perspiciatis corrupti
        ratione veniam animi et est! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores quisquam dolor sint consequatur soluta minima
        rem error dicta, ipsam at dignissimos sed accusamus harum delectus
        nostrum ullam eligendi iusto voluptate.
      </StyledItem>
    </StyledWrapper>
  );
}

export default Regulations;
