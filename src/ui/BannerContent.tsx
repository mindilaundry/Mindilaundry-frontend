import { ReactNode } from "react";

interface BannerContentProps {
  title1: string;
  title2: string;
  text: string;
  children?: ReactNode;
  className?: string;
  image: string;
}

const BannerContent = ({
  children,
  className,
  title1,
  title2,
  text,
  image,
}: BannerContentProps) => {
  return (
    <article
      className="globalPadding flex h-[55vh] w-full lg:h-[75vh]"
      style={{
        backgroundImage: `linear-gradient(
            rgba(36, 42, 46, 0.5),
            rgba(36, 42, 46, 0.5)
          ), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="m-auto flex h-full w-full max-w-custom2 items-center justify-center overflow-hidden sm:max-w-[350px] md:max-w-[700px] xl:max-w-custom2">
        <div
          className={` show m-auto flex -translate-x-[200%] transform flex-col items-start justify-between text-bgColor  transition-transform duration-500 ease-in-out lg:ml-0 ${className}`}
          data-testid="banner-content"
        >
          <h1 className=" mr-auto text-left text-3xl font-medium xm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl">
            <span className="block ">{title1}</span>
            <span className="block">{title2}</span>
          </h1>

          <div className="my-3 h-[1px] w-1/2 bg-bgColor xm:my-8"></div>
          <p
            className="font mr-auto 
              text-xs
              font-bold uppercase text-bgColor xm:text-sm"
          >
            {text}
          </p>
          <>{children}</>
        </div>
      </div>
    </article>
  );
};

export default BannerContent;
