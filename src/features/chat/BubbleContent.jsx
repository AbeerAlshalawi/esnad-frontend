// eslint-disable-next-line react/prop-types
export default function BubbleContent({ title, message }) {
  return (
    <div className="border-border max-w-[44rem] rounded-2xl border bg-white p-8 text-right font-tajwal">
      {title && (
        <h2 className="mb-4 text-base font-black text-green-700">{title}</h2>
      )}
      <p className="text-sm font-bold leading-loose text-gray-800">{message}</p>
    </div>
  );
}
