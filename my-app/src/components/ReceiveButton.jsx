import { LessonDetails } from './LessonDetails';

export const ReceiveButton = ({ requesterAddress, requester }) => {
  return (
    <div>
      <div className="h-3 bg-[#131C24]" />
      <div className="px-4 pb-4">
        <div className="p-4 rounded-xl bg-[#1D2732] border border-[#29374C]">
          <LessonDetails />
        </div>

        {/* Button Section */}
        <button
          className="receive-button"
          onClick={() => {
            window.open('https://example.com', '_blank', 'noopener,noreferrer');
          }}
        >
          Support {requester?.name || 'Loading...'}
        </button>
      </div>
    </div>
  );
}; 