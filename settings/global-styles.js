const globalStyles = {
  font_styles: {
    h1: "font-mono sm:py-3 select-none",
    h2: "font-mono sm:py-3 select-none",
    h3: "font-mono sm:py-3 select-none",
    h4: "font-mono sm:py-3 select-none",
    link: "underline hover:cursor-pointer hover:bg-amber-200 font-black",
    p: "font-mono font-medium",
    nav_bar: "font-mono font-black hover:cursor-pointer hover:bg-amber-200",
    nav_bar_logo: "font-mono font-black hover:cursor-pointer",
    btn: "font-mono font-black hover:cursor-pointer hover:bg-amber-200 px-2",
    highlight_text: "font-black underline decoration-pink-500",
  },
  div_styles: {
    page_inner_wrapper: "sm:container sm:w-8/12 w-9/12 sm:mx-auto",
    page_outer_wrapper: "container w-screen grid pt-12 place-content-center",
    work_project_container:
      "grid sm:grid-cols-2 auto-rows-max sm:gap-12 gap-6 py-12",
  },
};

export default globalStyles;
