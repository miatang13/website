const globalStyles = {
  font_styles: {
    h1: "font-mono font-black",
    h2: "font-mono font-bold",
    h3: "font-mono",
    h4: "font-mono",
    p: "font-mono font-normal",
    nav_bar: "font-mono font-black hover:cursor-pointer hover:bg-pink-200",
    btn: "font-mono font-black hover:cursor-pointer hover:bg-pink-200 px-2",
    highlight_text: "font-black underline decoration-pink-500",
  },
  div_styles: {
    page_inner_wrapper: "min-h-screen sm:container sm:w-8/12 w-9/12 sm:mx-auto",
    page_outer_wrapper:
      "container w-screen h-full grid pt-12 place-content-center",
    work_project_container:
      "grid sm:grid-cols-2 auto-rows-max sm:gap-12 gap-6 py-12",
  },
};

export default globalStyles;
