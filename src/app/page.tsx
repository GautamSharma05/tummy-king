import Header from "@/components/Header/Header";
import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <section className="hero-section container my-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[50px]">
          <div>
            <h1 className="md:text-5xl text-6xl font-bold">
              We&apos;re <span className="text-primary">Serious</span> For{" "}
              <span className="text-primary">Food</span> &{" "}
              <span className="text-[#FDC55E]">Delivery</span>
            </h1>
            <p className="text-lg mt-6">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 60 minutes.
            </p>
            <div className="mt-6">
              <Button className="rounded-full">Download App</Button>
            </div>
          </div>
          <div>
            <Image
              src="/HERo.png"
              alt="Tummy King Hero"
              width={700}
              height={700}
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-center">
          <span className="text-primary">Menu</span> That{" "}
          <span className="text-[#FDC55E]">Always</span> Make You Fall In{" "}
          <span className="text-primary">Love</span>
        </h1>
      </section>
    </>
  );
}
