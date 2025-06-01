"use client";
import { useRevealer } from "@/hooks/useRevealer";

const Contact = () => {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <div className="contact">
        <div className="col">
          <h2>Contato</h2>
        </div>
        <div className="col">
          <div className="contact-copy">
            <h2>E-mail para contato</h2>
            <h2>joao@copy.com</h2>
          </div>

          <div className="contact-copy">
            <h2>Dúvidas</h2>
            <h2>joao@copy.com</h2>
          </div>

          <div className="socials">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
