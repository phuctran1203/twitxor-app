export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="border-t text-sm text-center p-4 mt-4">
      <span className="text-muted-foreground/80">&copy; {year} Copyright:</span>{" "}
      <a href="https://github.com/phuctran1203" target="_blank">
        TMPlate
      </a>
    </div>
  );
}
