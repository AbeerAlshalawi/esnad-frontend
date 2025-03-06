import magnifier from "../../assets/magnifier.svg";

export function SearchButton() {
  return (
    <button className="text-primary-dark flex h-12 w-12 items-center justify-center rounded-full bg-secondary hover:bg-opacity-80">
      <img src={magnifier}></img>
    </button>
  );
}
