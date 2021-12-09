import { Link } from "remix";

export default function AboutIndex() {
  return (
    <div>
      <p >
      danishtest ist child
      </p>
      <p>
        <strong>
          <Link to="whoa">Check out one of them here.</Link>
        </strong>
      </p>
    </div>
  );
}
