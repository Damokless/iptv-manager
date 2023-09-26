"use client";

export default function OfflinePing() {
  return (
    <div className="flex justify-center items-center">
      <div className=" content-center self-center">
        <span className="relative flex h-3 w-3">
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300" />
        </span>
      </div>
      <div className="text-xs">
        Offline
      </div>
    </div>
  );
}
