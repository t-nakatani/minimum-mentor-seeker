export const BuyMeCoffeeButton = ({ url }) => {
  return (
    <div>
      <div className="h-3 bg-[#131C24]" />

      {/* Feature Section */}
      <div className="px-4">
        {/* Expected Time */}
        <p className="text-[#F8F9FB] text-base font-normal leading-normal pb-3 pt-1">Expected Time Commitment</p>
        <div className="flex items-center gap-4 bg-[#131C24] min-h-14">
          <div className="text-[#F8F9FB] flex items-center justify-center rounded-lg bg-[#29374C] shrink-0 size-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
            </svg>
          </div>
          <p className="text-[#F8F9FB] text-base font-normal leading-normal flex-1 truncate">30 min</p>
        </div>

        {/* Communication Method */}
        <p className="text-[#F8F9FB] text-base font-normal leading-normal pb-3 pt-1">Means of Communication</p>
        <div className="flex items-center gap-4 bg-[#131C24] min-h-14">
          <div className="text-[#F8F9FB] flex items-center justify-center rounded-lg bg-[#29374C] shrink-0 size-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z" />
            </svg>
          </div>
          <p className="text-[#F8F9FB] text-base font-normal leading-normal flex-1 truncate">Online Meeting</p>
        </div>

        {/* Button Section */}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-[#F4C753] text-[#141C24] text-base font-bold leading-normal tracking-[0.015em] py-3 rounded-xl text-center mt-4"
        >
          Buy Me a Coffee
        </a>
      </div>
    </div>
  );
}; 
