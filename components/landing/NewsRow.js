const descriptions_style = "mono font-normal text-slate-800 p-2";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function NewsRow(props) {
  return (
    !props.hide && (
      <div className='grid md:grid-cols-5 my-1' key={props.description}>
        <div className='md:p-2'>
          {/* <span className='pr-2'> {props.emoji}</span> */}
          <span className={props.future ? "text-blue-400" : "text-pink-400"}>
            {months[props.month - 1]}
          </span>
        </div>
        <div
          className={
            "rounded-sm col-span-4 " +
            (props.future ? "bg-blue-50" : "bg-pink-50") +
            (props.link
              ? " hover:bg-pink-200 hover:text-pink-800 cursor-pointer \
                transition duration-300 ease-in-out"
              : "")
          }
          key={props.description}
        >
          {props.link ? (
            <a
              href={props.link}
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              <p className={descriptions_style}>{props.description}</p>
            </a>
          ) : (
            <p className={descriptions_style}>{props.description}</p>
          )}
        </div>
      </div>
    )
  );
}
