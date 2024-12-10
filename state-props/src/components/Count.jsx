export default function Count(props) {
  console.log("Count Rendered")
  return <h2 className="count">{props.number}</h2>;
}
