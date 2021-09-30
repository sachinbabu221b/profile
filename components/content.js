import Image from "next/image";
import profilePic from "../public/assets/orange_stone.png";

export default function Content() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
     
      <Image src={profilePic} alt="Picture of the author" />
      <Image src={profilePic} alt="Picture of the author" />
      <Image src={profilePic} alt="Picture of the author" />
      <Image src={profilePic} alt="Picture of the author" />
      <Image src={profilePic} alt="Picture of the author" />
      <Image src={profilePic} alt="Picture of the author" />
    </section>
  );
}
// C:\Users\42 SQUARE\Desktop\blog-starter-app\public\assets\orange_stone.png
