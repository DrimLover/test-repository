import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is my custom title ",
  description: "Vadim trahalsya",
};

export default function Test() {
  return (
    <div>
      test
    </div>
  );
}
