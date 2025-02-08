// Next.js Link
import Link from "next/link";

// Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-zinc-800 p-5 py-10 text-white border-t border-blue-500 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="mb-3">Veja mais projetos no meu Linkedin:</p>
        <Link
          href="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/"
          legacyBehavior>
          <a className="text-4xl mb-5 hover:text-[#0077b5] ">
            <BsLinkedin className="linkedin" />
          </a>
        </Link>
      </div>
      <div className="mb-5">
        <span className="font-bold text-blue-500">
          ClonesNext &copy; {year.getFullYear()}{" "}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-3">Veja meus repositórios:</p>
        <Link href="https://github.com/Popotomimi" legacyBehavior>
          <a className="text-4xl hover:text-[#181717]">
            <BsGithub />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
