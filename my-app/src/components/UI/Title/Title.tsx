import "./style.css";

export const Title = (props: any) => {
  return (
    <>
      <h2 className={"funny-title section-title"}>{props.genre}</h2>
    </>
  );
};
