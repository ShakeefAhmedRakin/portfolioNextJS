import Image from "next/image";

export default function AwardCard({
  awardPhoto,
  awardTitle,
  awardDescription,
}: {
  awardPhoto: string;
  awardTitle: string;
  awardDescription: string;
}) {
  return (
    <>
      <div className="flex items-center justify-center h-full flex-col">
        <Image
          src={awardPhoto}
          width={90}
          height={90}
          draggable={false}
          sizes="100vw"
          alt={awardTitle + " photo"}
          className="w-full max-w-[90px] md:max-w-[130px]"
        ></Image>
        <h1 className="text-center max-w-[70%] flex-1 mb-2 text-text font-heading font-semibold text-[9px] md:text-xs">
          {awardTitle}
        </h1>
        <h2 className="text-center text-primary font-heading text-[9px] md:text-xs font-semibold">
          {awardDescription}
        </h2>
      </div>
    </>
  );
}
