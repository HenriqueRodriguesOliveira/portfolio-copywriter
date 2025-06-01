"use client";
import { useRevealer } from "@/hooks/useRevealer";
export default function Home() {
  useRevealer();
  return (
    <>
      <div className="revealer"></div>
      <div className="home">
        <h1 className="header">Portfólio João Octávio</h1>
      </div>
    </>
  );
}
