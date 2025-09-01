import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";
import { Check, PlusCircle, Search } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

interface Props<T, D> {
  itemsData: D;
  buttonLabel: string;
  totalItems: T[];
  selectedItems: T[];
  onCheckedChange: (item: T, value: boolean) => any;
  onReset?: () => any;
  disabled?: boolean;
  className?: string;
  side?: "bottom" | "top" | "right" | "left";
  align?: "start" | "center" | "end";
  totalItem: (itemsData: D, type: T) => number;
}

export default function DropdownButton<T, D>({
  itemsData,
  buttonLabel,
  totalItems,
  selectedItems,
  onCheckedChange,
  onReset,
  disabled,
  className,
  side,
  align,
  totalItem,
}: Props<T, D>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        <Button
          variant={"outline"}
          // size={"sm"}
          className={cn("border-dashed cursor-pointer", className)}
        >
          <div className="flex items-center gap-2">
            <PlusCircle /> <span>{buttonLabel}</span>
          </div>
          {selectedItems.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2" />
              {selectedItems
                .sort((a, b) => (a > b ? 1 : -1))
                .map((item: T, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {item as any}
                  </Badge>
                ))}
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side={side} align={align}>
        <Command>
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {totalItems.map((item, index) => (
                <CommandItem
                  key={index}
                  onSelect={() =>
                    onCheckedChange(item, !selectedItems.includes(item))
                  }
                >
                  <div
                    className={cn(
                      "size-4 border rounded-[4px] grid place-content-center",
                      selectedItems.includes(item) &&
                        "bg-primary border-primary"
                    )}
                  >
                    <Check
                      className={cn(
                        "size-3 text-primary-foreground",
                        !selectedItems.includes(item) && "hidden"
                      )}
                    />
                  </div>
                  <span className="capitalize">{item as any}</span>
                  <span className="ms-auto"> {totalItem(itemsData, item)}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator
              className={cn(
                (selectedItems.length === 0 || !onReset) && "hidden"
              )}
            />

            <CommandGroup
              className={cn(
                (selectedItems.length === 0 || !onReset) && "hidden"
              )}
            >
              <CommandItem
                onSelect={() => {
                  onReset && onReset();
                }}
              >
                <p className="w-full text-center font-medium">Clear</p>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
