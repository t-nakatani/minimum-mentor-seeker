export const BuyMeCoffeeButton = ({ url }) => {
  return (
    <div>
      <div className="flex px-4 py-2">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#F4C753] text-[#141C24] text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Buy Me a Coffee</span>
        </a>
      </div>
      <div className="h-3 bg-[#131C24]" />
    </div>
  );
}; 