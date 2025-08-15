import GitHub from "./icon/GitHub";

export default function Header() {
  return (
    <div className="z-1 flex px-8 py-4 justify-between border-b backdrop-blur-sm sticky top-0">
      <h1 className="font-medium italic tracking-widest text-2xl">FP</h1>
      <GitHub className="size-6" />
    </div>
  );
}
