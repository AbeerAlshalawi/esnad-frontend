import magnifier from "../assets/magnifier.svg";

export function SearchButton() {
  return (
    <button className="text-primary-dark bg-secondary flex h-12 w-12 items-center justify-center rounded-full">
      <img src={magnifier}></img>
    </button>
  );
}
