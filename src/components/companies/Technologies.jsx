import Technology from "./Technology";

const Technologies = ({ technologies }) => {
  return (
    <div className="mt-2 flex flex-wrap">
      {technologies.map((technology, i) => {
        return <Technology key={i} name={technology} />;
      })}
    </div>
  );
};

export default Technologies;
