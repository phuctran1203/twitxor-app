import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Adobe from "./icon/Adobe";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "./magicui/magic-card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function FreeItemShow() {
  return (
    <div>
      <h2 className="mb-2 text-center text-5xl font-semibold leading-[1.2] tracking-tight text-foreground">
        Checkout my collection
      </h2>

      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Everything's under here is completely free. You can download anything
        you want
      </h3>

      <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
        <Card className="p-0 shadow-none border-none">
          <MagicCard className="h-full">
            <CardHeader className="my-4">
              <CardAction>
                <Badge variant="outline">Plugin</Badge>
              </CardAction>
            </CardHeader>

            <CardContent>
              <Adobe className="size-16 mx-auto mb-2" />
              <CardTitle className="text-2xl mb-1">Twitxor</CardTitle>
              <CardDescription>
                A plugin for adobe to make video smoother when on slow motion by
                generating more frames between existed frames.
              </CardDescription>
            </CardContent>

            <CardFooter className="my-4 space-x-2">
              <a
                href="https://frdl.io/vsgc1b97m4dj/Twixtor.rar"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Download
              </a>
              <Button
                variant={"outline"}
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://frdl.io/vsgc1b97m4dj/Twixtor.rar"
                  );

                  toast.success("Link saved into your clipboard");
                }}
              >
                <Copy />
              </Button>
            </CardFooter>
          </MagicCard>
        </Card>

        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="p-0 shadow-none border-none">
            <MagicCard className="h-full">
              <CardContent className="py-4">
                <p>Upcoming...</p>
              </CardContent>
            </MagicCard>
          </Card>
        ))}
      </div>
    </div>
  );
}
