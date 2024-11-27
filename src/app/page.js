import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import "./App.css";
import USERS from "./admin.json";
import { CARD } from "./card.js";
const Render = function () {
  let card = USERS.map((product) => <CARD product={product} />);

  return <div>{card}</div>;
};

export default function Home() {
  return (
    <div>
      <Render />
      {console.log(USERS)}
    </div>
  );
}
