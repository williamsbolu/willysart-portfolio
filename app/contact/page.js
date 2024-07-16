import Link from "next/link";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import ContactForm from "@/app/_components/ui/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <section className="my-20 flex flex-col gap-16 md:flex-row">
      <ContactForm />

      <div className="grid auto-rows-min gap-y-5 text-sm font-medium text-stone-600 dark:text-gray-400 md:w-[50%]">
        <p className="leading-7">
          If you are interested in commissioning me, knowing more about my work,
          or simply want to talk to me about your ideas, don&apos;t hesitate to
          reach out!
        </p>
        <p className="leading-7">
          You can contact me at{" "}
          <span className="font-bold text-stone-600 dark:text-gray-200">
            iamwillysart@gmail.com
          </span>{" "}
          or fill in this form.
        </p>
        <p className="leading-7">
          You can also follow me on social media if you&apos;d prefer. Feel free
          to drop by my Instagram, and Twitter! As usual, thank you for the
          support!
        </p>

        <div className="mt-3 flex gap-x-3">
          <Link href="https://www.instagram.com/iamwillysart" target="_blank">
            <AiOutlineInstagram className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/iamwillysart" target="_blank">
            <AiOutlineTwitter className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/iamwillysart" target="_blank">
            <BiLogoFacebook className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
