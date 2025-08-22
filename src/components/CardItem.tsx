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
import { Copy } from "lucide-react";
import type { Item } from "@/types/itemType";

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

        <CardContent>
          <div className="size-16 mx-auto mb-2">{item.image}</div>
          <CardTitle className="text-2xl mb-1">{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardContent>

        <CardFooter className="my-4 space-x-2">
          <a
            href={item.link}
            target="_blank"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Download
          </a>
          <Button
            variant={"outline"}
            onClick={() => {
              navigator.clipboard.writeText(item.link);

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
