export default function Steps() {
  return (
    <div className="flex items-center justify-between mx-auto text-xl font-semibold max-w-10/12 mb-14 text-gray-50">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full">
        1
      </div>

      <div className="flex items-center justify-center flex-1 px-4">
        <div className="w-full border-t-2 border-gray-300 border-dotted"></div>
      </div>

      <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
        2
      </div>

      <div className="flex items-center justify-center flex-1 px-4">
        <div className="w-full border-t-2 border-gray-300 border-dotted"></div>
      </div>

      <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
        3
      </div>
    </div>
  );
}
