"use client";

import Image from "next/image";
const img_size = 600;
const author_link_style =
  "text-normal font-normal bg-blue-100 rounded-lg p-2 hover:bg-blue-200 transition duration-200 ease-in-out hover:text-blue-400 \
  flex flex-col space-x-2 place-items-center px-2 py-2 text-center place-content-center text-slate-800";
const my_author_link_style =
  "text-normal bg-blue-300 rounded-lg p-2 transition duration-200 ease-in-out  \
flex flex-col space-x-2 place-items-center px-4 py-2 text-center place-content-center text-slate-800 hover:text-pink-400 hover:bg-pink-100";
const project_link_style =
  "text-normal font-normal text-blue-500 border border-blue-100 rounded-lg p-2 hover:bg-blue-300 hover:text-white transition duration-200 ease-in-out \
  flex flex-row space-x-2 text-slate-800";
const project_link_disabled_style =
  "text-normal font-normal italic bg-slate-50 rounded-lg p-2  \
  flex flex-row space-x-2 text-slate-300 cursor-not-allowed";


export default function PublicationPaper(props) {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 3xl:grid-cols-1 px-4 py-2 outline outline-offset-2 outline-blue-50 rounded-sm'>
      <div className='h-full grid place-content-center lg:pr-4 '>
        {props.thumbnail && (
          <Image
            src={"/assets/publication/" + props.thumbnail}
            alt={props.title}
            width={img_size}
            height={(img_size / 16) * 9}
            loading='lazy'
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className='h-full lg:col-span-2 md:pl-2 flex flex-wrap items-center'>
        <div>
          {/* <DocumentTextIcon className='h-8 w-8 text-slate-800' /> */}
          <h2 className='text-xl font-bold text-slate-800 pb-0 mb-0'>{props.title}</h2>
          {props.arxiv_year && (
            <h4 className='xl:text-lg text-slate-400 pt-0 mt-1'>{props.arxiv_year}</h4>
          )}
        </div>

        <div className='authors flex flex-row flex-wrap gap-x-1.5 gap-y-1'>
          {props.authors.map((author) => (
            <a
              target='_blank'
              className={
                author.name == "Mia Tang"
                  ? my_author_link_style
                  : author_link_style
              }
              href={author.link}
              key={author.name}
            >
              {author.has_asterisk && <p>{author.name} &#42;</p>}
              {!author.has_asterisk && <p>{author.name}</p>}
            </a>
          ))}
        </div>
        <div className='flex flex-row flex-wrap gap-x-3 gap-y-1.5 pt-2 mb-2'>
          {props.code_link && (
            <a
              target={props.code_link == " " ? "" : "_blank"}
              className={props.code_link == " " ? project_link_disabled_style : project_link_style}
              href={props.code_link}
            >
              <p>{props.code_link == " " ? "Code (Coming Soon)" : "Code"}</p>
            </a>
          )}
          {props.website_link && (
            <a
              target={props.website_link == " " ? "" : "_blank"}
              className={props.website_link == " " ? project_link_disabled_style : project_link_style}
              href={props.website_link}
            >
              <p>{props.website_link == " " ? "Website (Coming Soon)" : "Website"}</p>
            </a>
          )}
          {props.paper_link && (
            <a
              target={props.paper_link == " " ? "" : "_blank"}
              className={props.paper_link == " " ? project_link_disabled_style : project_link_style}
              href={props.paper_link}
            >
              <p>{props.paper_link == " " ? "Paper (Coming Soon)" : "Paper"}</p>
            </a>
          )}
          {props.demo_link && (
            <a
              target='_blank'
              className={project_link_style}
              href={props.demo_link}
            >
              <p>Demo</p>
            </a>
          )}
        </div>
      </div>

    </section>
  );
}
