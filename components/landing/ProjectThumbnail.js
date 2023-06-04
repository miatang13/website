import globalStyles from "../../settings/global-styles";
import LinkWrapper from "../global/LinkWrapper";
import {
  thumbnail_base_path,
  thumbnail_filename,
  thumbnail_gif_filename,
} from "../../settings/path";
import Image from "next/image";

export default function ProjectThumbnail(p) {
  const thumbnail_w = 1920;

  return (
    <LinkWrapper href={p["no-click"] ? "/" : "work" + p.page_name} key={p.path}>
      <div
        className={
          p["no-click"]
            ? "cursor-not-allowed"
            : "cursor-pointer" +
              " h-full p-3 bg-gradient-to-r from-pink-50 to-white-500 transition ease-in-out duration-300 \
                hover:from-orange-50 hover:to-pink-100 outline outline-offset-2 outline-pink-50"
        }
      >
        <p
          className={
            globalStyles.font_styles.p + " text-slate-400  text-sm pb-3"
          }
        >
          {p.timeline}
        </p>
        <Image
          src={
            p["gif-thumbnail"]
              ? "/" + thumbnail_base_path + p.path + thumbnail_gif_filename
              : "/" + thumbnail_base_path + p.path + thumbnail_filename
          }
          alt='Thumbnail'
          width={thumbnail_w}
          height={(thumbnail_w / 16) * 9}
        />
        <h3
          className={
            globalStyles.font_styles.h2 +
            (p.complete ? " bg-gradient-to-r from-yellow-100" : " ")
          }
        >
          {p.landing.title}
        </h3>
        <p className={globalStyles.font_styles.p + " text-slate-400 text-sm"}>
          {p.skills}
        </p>
      </div>
    </LinkWrapper>
  );
}
