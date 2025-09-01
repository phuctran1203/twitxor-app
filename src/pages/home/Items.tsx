import { Card, CardContent } from "@/components/ui/card";
import Adobe from "../../components/icon/Adobe";
import { MagicCard } from "../../components/magicui/magic-card";
import Windows from "../../components/icon/Windows";
import type { Item, Type } from "@/types/itemType";
import CardItem from "@/components/CardItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import DropdownButton from "@/components/dropdown-button";

const itemsData: Item[] = [
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
  {
    title: "Silence Remover",
    type: "plugin",
    description:
      "An automatic timeline-cutting tool for Adobe Premiere that detects and removes silent gaps to streamline video editing.",
    image: <Adobe className="size-full" />,
    link: "https://frdl.io/my7n82gkctf8/Silence+Remover_V1.2.zip",
  },
];

const types: Type[] = ["plugin", "tool"];
export default function FreeItems() {
  const [filteredType, setFilteredType] = useState<Type[]>([]);
  const [items, setItems] = useState<Item[]>(itemsData);

  useEffect(() => {
    setItems(
      itemsData.filter((item) =>
        filteredType.length > 0 ? filteredType.includes(item.type) : item
      )
    );
  }, [filteredType]);

  return (
    <div id="collection" className="px-4">
      <h2 className="mb-2 text-center text-5xl font-semibold leading-[1.2] tracking-tight text-foreground">
        Checkout my collection
      </h2>

      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Everything's under here is completely free. You can download anything
        you want
      </h3>

      <div className="flex mb-4">
        <DropdownButton
          itemsData={itemsData}
          className="ms-auto"
          buttonLabel="Type"
          selectedItems={filteredType}
          totalItems={types}
          onCheckedChange={(item, value) => {
            setFilteredType((prev) =>
              value ? [...prev, item] : prev.filter((i) => i !== item)
            );
          }}
          side="bottom"
          align="end"
          totalItem={(itemsData, type) =>
            itemsData.reduce(
              (acc, curr) => (curr.type === type ? (acc += 1) : acc),
              0
            )
          }
        />
      </div>

      <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CardItem item={item} />
        ))}

        <Card className="p-0 shadow-none border-none">
          <MagicCard className="h-full grid place-content-center">
            <CardContent>
              <p>Upcoming...</p>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
}
