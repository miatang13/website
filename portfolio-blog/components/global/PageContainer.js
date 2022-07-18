export default function PageContainer(props) {
  <div className="container h-screen w-screen grid" id="page-container">
    <div className="sm:w-8/12 place-self-center"> {props.children} </div>
  </div>;
}
