import Image from "next/image";
import FXAA from "../../public/blog/anti-aliasing/FXAA.png";
import MSAA from "../../public/blog/anti-aliasing/MSAA.png";
import SSAA from "../../public/blog/anti-aliasing/SSAA.png";
import TXAA from "../../public/blog/anti-aliasing/TXAA.png";
import globalStyles from "../../settings/global-styles";

export default function AntiAliasing() {
  return (
    <div className="container h-screen w-screen grid" id="page-container">
      <div className="sm:w-8/12 place-self-center">
        <h1 className={globalStyles.font_styles.h1}> Anti-aliasing </h1>
        <div>
          <Image src={FXAA} />
          <Image src={MSAA} />
          <Image src={SSAA} />
          <Image src={TXAA} />
        </div>
      </div>
    </div>
  );
}
