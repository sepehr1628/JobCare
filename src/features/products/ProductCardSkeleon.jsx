import Skeleton from "react-loading-skeleton";

function ProductCardSkeleton() {
  return (
    <div>
      <div>
        <div>
          <Skeleton className="rounded-t-md w-full h-40 sm:h-48" />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-sm">
          <b>
            <Skeleton width={30} />
          </b>

          <Skeleton width={40} height={25} />
        </div>

        <p className="text-lg w-auto whitespace-nowrap overflow-hidden text-ellipsis">
          <Skeleton />
        </p>

        <Skeleton count={2} height={15} />

        <Skeleton
          className={`
           transition-all duration-300 mt-4 mb-2 md:m-auto px-3 py-1 lg:py-2 rounded-full w-4/5 m-auto flex items-center justify-center gap-2`}
        />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
