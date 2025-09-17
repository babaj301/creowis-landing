import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col h-[30vh] md:justify-center px-4 py-4 md:px-12 gap-4"
    >
      <div className="flex flex-col md:flex-row justify-between md:w-full gap-8 px-2 py-8 ">
        <div className="flex items-center space-x-2">
          <Image
            src={"/logomark.svg"}
            alt="Logo"
            height={24}
            width={24}
            className="h-11 w-11"
          />
          <p className="text-3xl font-bold text-white">CirriNote</p>
        </div>
        <div className="flex items-center space-x-4 px-2">
          <Link href="https://www.linkedin.com/company/creowis/">
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </Link>

          <Link href="https://web.facebook.com/creowis">
            <Image
              src={"/instagram.svg"}
              alt="instagram"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </Link>
          <Link href="https://x.com/creowistech">
            <Image
              src={"/twitter.svg"}
              alt="twitter"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </Link>
        </div>
      </div>
      <div className="text-sm font-medium text-white/50 flex flex-col md:flex-row justify-between px-2">
        <p>© CirriNote 2025</p>
        <p>Crafted with passion by CreoWis</p>
      </div>
    </div>
  );
}
