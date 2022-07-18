import Image from "next/image";
import GPU from "../../public/blog/graphics-valentines/GPU.png";
import Halfedge from "../../public/blog/graphics-valentines/Halfedge.png";
import NURBS from "../../public/blog/graphics-valentines/NURBS.png";
import World from "../../public/blog/graphics-valentines/World.png";
import globalStyles from "../../settings/global-styles";

export default function GraphicsValentines() {
  return (
    <div className="container h-screen w-screen grid" id="page-container">
      <div className="sm:w-8/12 place-self-center">
        <h1 className={globalStyles.font_styles.h1}> Valentines </h1>
        <div>
          <Image src={GPU} />
          <Image src={Halfedge} />
          <Image src={World} />
          <Image src={NURBS} />
        </div>
      </div>
    </div>
  );
}
