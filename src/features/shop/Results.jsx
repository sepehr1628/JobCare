function Results({ data, cards, pathname }) {
  const CardComponent = Object.entries(cards).filter(
    (el) => el[0] === pathname
  )[0][1];

  return (
    <>
      <div className="flex flex-wrap justify-evenly xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-5 items-center [&>div]:max-w-96 [&>div]:sm:max-w-72 [&>div]:border xl:[&>div]:max-w-none [&>div]:border-solid [&>div]:border-gray-400 [&>div]:w-full [&>div]:rounded-md">
        {data &&
          data.map((item) => <CardComponent item={item} key={item.id} />)}
      </div>
      <div className="flex justify-center gap-8 my-4">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
}

export default Results;
