import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { FacebookIcon } from "lucide-react";
export default function Home() {
  return (
    <>
      <section className="hero-section container mt-5">
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
              <Link href="https://play.google.com/store/apps/details?id=com.app.ffc">
                <Button className="rounded-full">Download App</Button>
              </Link>
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
      <section className="container my-5 md:flex md:mt-16 items-center gap-10">
        <Image
          src="/img_1.png"
          alt="Tummy King Hero"
          width={500}
          height={500}
          objectFit="contain"
        />
        <div>
          <h2 className="md:text-5xl text-3xl font-bold">
            We are <span className="text-primary">more</span> than{" "}
            <span className="text-[#FDC55E]">multiple</span> service
          </h2>
          <p className="font-extralight mt-2">This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 mt-3">
            <div className="flex items-center gap-3"><Image src='/online_order.png' width={20} height={20} alt="order_icon"/> <span> Online ORDER</span> </div>
            <div className="flex items-center gap-3"><Image src='/time.png' width={20} height={20} alt="order_icon"/>  <span>24/7 Service</span> </div>
            <div className="flex items-center gap-3"><Image src='/calendar.png' width={20} height={20} alt="order_icon"/>  <span>Super Chef</span> </div>
            <div className="flex items-center gap-3"><Image src='/calendar.png' width={20} height={20} alt="order_icon"/>  <span>Organized Place</span> </div>
            <div className="flex items-center gap-3"><Image src='/calendar.png' width={20} height={20} alt="order_icon"/>  <span>Clean Kitchen</span> </div>
          </div>
          <Button className="rounded-full mt-5">About Us</Button>
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
