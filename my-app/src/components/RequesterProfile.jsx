export const RequesterProfile = ({ requester }) => {
  return (
    <>
      <div className="flex items-center gap-4 bg-[#131C24] px-4 min-h-14">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-fit"
          style={{
            backgroundImage: `url("${requester.avatar}")`,
          }}
        />
        <p className="text-[#F8F9FB] text-base font-normal leading-normal flex-1 truncate">
          {requester.name}
        </p>
      </div>
      <p className="text-[#F8F9FB] text-base font-normal leading-normal pb-3 pt-1 px-4">
        {requester.description}
      </p>
    </>
  );
}; 