import Image from "next/image";
import nineTeen6ty from "../../public/blog/graphics-history/1960s.png";
import nineTeen7ty from "../../public/blog/graphics-history/1970s.png";
import nineTeen8ty from "../../public/blog/graphics-history/1980s.png";
import nineTeen9ty from "../../public/blog/graphics-history/1990s.png";
import twoThousands from "../../public/blog/graphics-history/2000s.png";
import globalStyles from "../../settings/global-styles";

export default function GraphicsHistory() {
  return (
    <div className="container h-screen w-screen grid" id="page-container">
      <div className="sm:w-8/12 place-self-center">
        <h1 className={globalStyles.font_styles.h1}>
          Computer Graphics History
        </h1>
        <div>
          <Image src={nineTeen6ty} />
          <Image src={nineTeen7ty} />
          <Image src={nineTeen8ty} />
          <Image src={nineTeen9ty} />
          <Image src={twoThousands} />
        </div>
      </div>
    </div>
  );
}
