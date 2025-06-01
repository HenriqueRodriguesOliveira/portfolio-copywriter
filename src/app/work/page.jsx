"use client";
import { useRevealer } from "@/hooks/useRevealer";

const Work = () => {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <div className="work">
        <h1>Selecione o trabalho</h1>

        <div className="projects">
          <img src="/img1.jpg" alt="" />
          <img src="/img2.jpg" alt="" />
          <img src="/img3.jpg" alt="" />
          <img src="/img4.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Work;
