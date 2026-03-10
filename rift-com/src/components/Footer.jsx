import React from "react";
import Container from "./common/Container";
import Row from "./common/Row";

const Footer = () => {
  return (
    <Container className="bg-black py-[20px] md:py-[14px] md:h-[52px]">
      <Row className="text-white flex-col md:flex-row justify-center md:justify-between h-full items-center gap-[15px] md:gap-0">
        <p className="text-[14px] md:text-[16px]">© 2023 RiftCom Inc.</p>
        <img src="/imgs/cards.png" alt="card" className="max-w-full w-[250px] md:w-[283px] object-contain" />
        <p className="text-[14px] md:text-[16px]">Scroll to top</p>
      </Row>
    </Container>
  );
};

export default Footer;
