export default function StyledExternalLink(props) {
  return (
    <a
      href={props.href}
      target='_blank'
      className='underline hover:cursor-pointer hover:bg-pink-100 hover:text-pink-500 font-bold'
    >
      {props.children}
    </a>
  );
}
