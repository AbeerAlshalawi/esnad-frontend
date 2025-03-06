// eslint-disable-next-line react/prop-types
export default function LoadingSpinner({ size, fullPage }) {
  return (
    <div
      className={`flex ${fullPage ? "h-screen" : "h-full"} items-center justify-center`}
    >
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-4 border-gray-300 border-t-primary`}
      ></div>
    </div>
  );
}
