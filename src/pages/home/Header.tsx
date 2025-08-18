import GitHub from "../../components/icon/GitHub";
import Logo from "../../components/icon/Logo";

export default function Header() {
  const handleGoTo = () => {};
  return (
    <div className="z-1 flex items-center px-4 sm:px-8 py-2 justify-between border-b backdrop-blur-sm sticky top-0">
      <Logo className="fill-foreground" />
      <GitHub className="size-6" />
    </div>
  );
}
