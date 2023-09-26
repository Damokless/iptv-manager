"use client";

export default function OnlinePing() {
  return (
    <div className="flex justify-center items-center">
      <div className=" content-center self-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      </div>
      <div className="text-xs">
        Online
      </div>
    </div>
  );
}
