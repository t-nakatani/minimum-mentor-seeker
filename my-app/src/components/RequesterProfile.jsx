export const RequesterProfile = ({ requester }) => {
  return (
    <>
      <div className="flex items-center gap-4 bg-[#131C24] px-4 min-h-14">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10 shrink-0"
          style={{
            backgroundImage: `url("${requester.avatar}")`,
          }}
        />
        <p className="text-[#F8F9FB] text-base font-normal leading-normal text-left">
          {requester.name}
        </p>
      </div>
      <div className="mx-4 mt-1 mb-3 p-3 rounded-lg bg-[#29374C]">
        <p className="text-[#F8F9FB] text-base font-normal leading-normal text-left">
          {requester.description}
        </p>
      </div>
    </>
  );
}; 