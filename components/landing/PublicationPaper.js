"use client";

import Image from "next/image";
const img_size = 600;
const author_link_style =
  "font-normal bg-blue-50 rounded-lg p-2 hover:bg-blue-300 transition duration-200 ease-in-out  \
  flex flex-col space-x-2 place-items-center px-4 py-2 text-center place-content-center text-slate-800";
const my_author_link_style =
  "bg-blue-200 rounded-lg p-2 transition duration-200 ease-in-out  \
flex flex-col space-x-2 place-items-center px-4 py-2 text-center place-content-center text-slate-800";
const project_link_style =
  "font-normal italic bg-pink-50 rounded-lg p-2 hover:bg-pink-300 transition duration-200 ease-in-out \
  flex flex-row space-x-2 text-slate-800";

export default function PublicationPaper(props) {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 3xl:grid-cols-1 h-max'>
      <div className='h-full grid place-content-center lg:p-4'>
        {props.thumbnail && (
          <Image
            src={"/assets/publication/" + props.thumbnail}
            alt={props.title}
            className='rounded-lg'
            width={img_size}
            height={(img_size / 16) * 9}
            loading='lazy'
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className='full-h lg:col-span-2'>
        <div>
          {/* <DocumentTextIcon className='h-8 w-8 text-slate-800' /> */}
          <h2 className='text-xl font-bold text-slate-800'>{props.title}</h2>
          {props.arxiv_year && (
            <h4 className='xl:text-lg text-slate-400'>{props.arxiv_year}</h4>
          )}
        </div>

        <div>
          <div className='authors flex flex-row flex-wrap gap-x-1.5 gap-y-1.5 pt-4'>
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
          <div className='flex flex-row flex-wrap gap-x-1.5 gap-y-1.5 pt-4'>
            {props.code_link && (
              <a
                target={props.code_link == " " ? "" : "_blank"}
                className={project_link_style}
                href={props.code_link}
              >
                <p>{props.code_link == " " ? "Code (Coming Soon)" : "Code"}</p>
              </a>
            )}
            {props.website_link && (
              <a
                target='_blank'
                className={project_link_style}
                href={props.website_link}
              >
                <p> Website</p>
              </a>
            )}
            {props.paper_link && (
              <a
                target='_blank'
                className={project_link_style}
                href={props.paper_link}
              >
                <p>Paper</p>
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
      </div>
    </section>
  );
}
