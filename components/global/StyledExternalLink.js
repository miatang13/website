export default function StyledExternalLink(props) {
  return (
    <a
      href={props.href}
      target='_blank'
      className='underline hover:cursor-pointer hover:bg-pink-200 hover:text-white'
    >
      {props.children}
    </a>
  );
}
