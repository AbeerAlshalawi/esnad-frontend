// eslint-disable-next-line react/prop-types
export default function Avatar({ src }) {
  return (
    <div className="ml-4 mr-4 flex h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full bg-primary">
      <img src={src} alt="Avatar" />
    </div>
  );
}
