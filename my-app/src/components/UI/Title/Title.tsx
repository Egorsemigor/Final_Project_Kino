import "./style.css";

export const Title = ({ genre }: { genre: string }) => {
  return <h2 className={"funny-title section-title"}>{genre}</h2>;
};
