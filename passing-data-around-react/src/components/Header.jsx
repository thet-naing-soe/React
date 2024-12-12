import avatar from "../assets/user.png";

export default function Header(props) {
  return (
    <header>
      <img src={avatar} alt="user logo" />
      <p>{props.userName}</p>
    </header>
  );
}
