import Link from "next/link";
import Image from "next/image";

function CategoryCard({ name, title }) {
  return (
    <div className="shadow-[0_4px_15px] shadow-[#304ffe58] rounded-2xl overflow-hidden p-2.5 my-2.5 mx-0 transition-all ease-in delay-100 hover:origin-center hover:-rotate-6">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          className="rounded-xl"
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="text-xl font-normal text-[#304ffe] text-center my-2.5 mx-1">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
