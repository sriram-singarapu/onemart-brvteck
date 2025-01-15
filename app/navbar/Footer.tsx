import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer  bg-black text-white p-10 mt-4">
      <aside>
        <Image src="/logo.png" alt="one mart logo " width={150} height={150} />
        <p>
          ADITHYA NAGAR, POST OFFICE, B-CAMP AREA KURNOOL,
          <br /> KURNOOL DISTRICT 518002
        </p>
      </aside>
      <nav>
        <p className="font-bold underline text-[#e0c080]">Services</p>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </nav>
      <nav>
        <p className="font-bold underline text-[#e0c080]">Company</p>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </footer>
  );
};

export default Footer;
