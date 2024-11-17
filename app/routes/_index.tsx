import Bass from "~/icons/Bass";
import Golf from "~/icons/Golf";
import Hockey from "~/icons/Hockey";

import Card from "~/components/Card";

export default function Home() {
  return (
    <div className="space-y-10 p-4 relative flex h-full flex-col overflow-y-auto">
      <h1 className="text-[69px]/[70px]">
        Hello!
        <br /> I'm Nolan.
      </h1>
      <p className="px-2">
        As a Software Engineer with over 20 years of experience in web
        development, I bring a wealth of knowledge and a proven track record of
        excellence to every project I undertake. Throughout my career, I have
        honed my skills in crafting intuitive, high-performance user interfaces
        that enhance user experience and drive business success. My deep
        understanding of modern web technologies, combined with a passion for
        innovation and a keen eye for detail, ensures that the web applications
        I develop are not only visually stunning but also robust and scalable.
      </p>

      <div>
        <h2 className="mb-2">Tech Debt</h2>
        <p className="px-2 mb-6">
          If I am not building web apps or hanging with my family, you can find
          me doing one of these fun things!
        </p>
        <div className="grid lg:grid-cols-3 gap-6 px-2">
          <Card
            icon={Golf}
            title="Golf!"
            copy="I have been golfing for over 30 years... Still suck, but I love it!"
          />
          <Card
            icon={Bass}
            title="Bass!"
            copy="Bass is the coolest instrument and if you don't believe me I can show 1 or 2 or 4 of them that might change your mind."
          />
          <Card
            icon={Hockey}
            title="Hockey!"
            copy="Greatest sport in the world! I love playing and supporting such an amazing game."
          />
        </div>
      </div>
    </div>
  );
}
