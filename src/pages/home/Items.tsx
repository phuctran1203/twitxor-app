import { Card, CardContent } from "@/components/ui/card";
import Adobe from "../../components/icon/Adobe";
import { MagicCard } from "../../components/magicui/magic-card";
import Windows from "../../components/icon/Windows";
import type { Item } from "@/types/itemType";
import CardItem from "@/components/CardItem";

const items: Item[] = [
  {
    title: "Twixtor",
    type: "plugin",
    description:
      "A plugin for adobe to make video smoother when on slow motion by generating more frames between existed frames",
    image: <Adobe className="size-full" />,
    link: "https://frdl.io/vsgc1b97m4dj/Twixtor.rar",
  },
  {
    title: "Scrcpy",
    type: "tool",
    description:
      "Scrcpy is a fast and free tool to mirror your Android phone screen to your computer via USB connection",
    image: <Windows className="size-full" />,
    link: "https://frdl.io/q2lr6uccw7ec/scrcpy.zip",
  },
];

export default function FreeItems() {
  return (
    <div id="collection">
      <h2 className="mb-2 text-center text-5xl font-semibold leading-[1.2] tracking-tight text-foreground">
        Checkout my collection
      </h2>

      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Everything's under here is completely free. You can download anything
        you want
      </h3>

      <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
        {items.map((item) => (
          <CardItem item={item} />
        ))}

        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index} className="p-0 shadow-none border-none">
            <MagicCard className="h-full grid place-content-center">
              <CardContent>
                <p>Upcoming...</p>
              </CardContent>
            </MagicCard>
          </Card>
        ))}
      </div>
    </div>
  );
}
