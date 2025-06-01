"use client";
import { useRevealer } from "@/hooks/useRevealer";

const Studio = () => {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <div className="studio"></div>
      <div className="col">
        <h2>Minha histório</h2>
      </div>
      <div className="col">
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h2>

        <div className="about-img">
          <img src="/studio.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Studio;
