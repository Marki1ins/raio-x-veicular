"use client";
import { useParams } from "next/navigation";

export default function Consultation() {
  const params = useParams();

  return <div>{params?.id}</div>;
}
