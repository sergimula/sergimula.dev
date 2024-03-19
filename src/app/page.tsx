
import MotorcycleIcon from "@/components/Motorcycle";
import InstagramIcon from "@/components/InstagramIcon";
import LinkedinIcon from "@/components/LinkedinIcon";
import GitHubIcon from "@/components/GitHubIcon";
import MailIcon from "@/components/MailIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center flex-col text-center">
        <h2 className="text-2xl font-bold text-carrot mb-3">
          Hello, I&apos;m Sergi Mulà!
        </h2>
        <p className="text-l text-light-chocolate flex place-items-center flex-col">
          I&apos;m a Senior Web Engineer based in Barcelona.
          <br />
          My passions are web development, and vintage style motorcycles.
        </p>
        <MotorcycleIcon />
        <p className="text-l text-light-chocolate">
          I&apos;m currently working at <a className="underline" href="https://n26.com">N26</a>
        </p>
        <ul className="flex space-x-2 mt-2 place-items-center">
          <li>
            <a href="https://instagram.com/sergi_smj" className="text-dark-chocolate hover:text-chocolate">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sergi-mul%C3%A0-jara-6924709b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-dark-chocolate hover:text-chocolate">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/sergimula" className="text-dark-chocolate hover:text-chocolate">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="mailto:sergi.serch@gmail.com" className="text-dark-chocolate hover:text-chocolate">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
