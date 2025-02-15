export const ContentImage = ({ imageUrl }) => {
  return (
    <div className="flex w-full grow bg-[#131C24] @container p-4">
      <div className="w-full gap-1 overflow-hidden bg-[#131C24] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
        <div
          className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
          style={{
            backgroundImage: `url("${imageUrl}")`,
          }}
        />
      </div>
    </div>
  );
}; 