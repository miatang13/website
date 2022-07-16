import globalStyles from "../settings/global-styles.json";

export default function Blog() {
  return (
    <div className="container">
      <h4 className={globalStyles.font_styles.h4}>I like to do </h4>
      <div class="grid grid-cols-4 gap-4" id="blog-posts-thumbnails">
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
        <div>01</div>
        <div>09</div>
      </div>
    </div>
  );
}
