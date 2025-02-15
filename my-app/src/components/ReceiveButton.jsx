import React from 'react';
import { Link } from 'react-router-dom';
import { LessonDetails } from './LessonDetails';

// デフォルトエクスポートから名前付きエクスポートに変更
export const ReceiveButton = ({ requesterAddress, requester }) => {
  return (
    <div>
      <div className="h-3 bg-[#131C24]" />
      <div className="px-4 pb-4">
        <div className="p-4 rounded-xl bg-[#1D2732] border border-[#29374C]">
          <LessonDetails />
        </div>

        {/* Button Section */}
        <Link to="/chat">
          <button
            className="receive-button"
          >
            Support {requester?.name || 'Loading...'}
          </button>
        </Link>
      </div>
    </div>
  );
}; 