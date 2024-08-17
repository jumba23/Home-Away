import Image from "next/image";

const ImageContainer = ({
  mainImage,
  name,
}: {
  mainImage: string;
  name: string;
}) => {
  <section className="h-[300px] md:h-[500px] relative mt-8">
    <Image
      src={mainImage}
      alt={name}
      fill
      sizes="100vw"
      className="object-cover rounded"
      priority
    />
  </section>;
  return <div>ImageContainer</div>;
};

export default ImageContainer;
