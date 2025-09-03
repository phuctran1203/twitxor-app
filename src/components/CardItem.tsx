import { cn } from "@/lib/utils";
import { MagicCard } from "./magicui/magic-card";
import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import { toast } from "sonner";
import { Copy, Download, Link2 } from "lucide-react";
import type { Item } from "@/types/itemType";
import { AuroraText } from "./magicui/aurora-text";

export default function CardItem({ item }: { item: Item }) {
  return (
    <Card className="p-0 shadow-none border-none">
      <MagicCard className="h-full">
        <CardHeader className="my-4">
          <CardAction>
            <Badge variant="outline" className="capitalize">
              {item.type}
            </Badge>
          </CardAction>
        </CardHeader>

        <CardContent className="grow">
          <div className="size-16 mx-auto mb-4">{item.image}</div>
          <CardTitle className="text-2xl mb-1">{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardContent>

        <CardFooter className="my-4">
          <a
            href={item.link_1}
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-r-none border-r border-r-muted border-dashed cursor-pointer"
            )}
          >
            Download
          </a>
          <a
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-l-none cursor-pointer"
            )}
            href={item.link_2}
          >
            <Download />
          </a>

          <Button
            className="ms-auto cursor-pointer"
            variant={"outline"}
            onClick={() => {
              navigator.clipboard.writeText(item.link_1);

              toast.success("Link saved into your clipboard");
            }}
          >
            <Copy />
          </Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
