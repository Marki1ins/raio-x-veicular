export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className={`w-full py-3 px-4 bg-gray-200 rounded-xl outline-none ring-0 placeholder:text-gray-400 mb-6 ${props.className}`}
    />
  );
}
