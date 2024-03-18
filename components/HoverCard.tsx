"use client";
import { ArrowBigDown, CalendarDays, ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

interface CustomHoverCardProps {
  title: string;
  data: any[];
}

export function CustomHoverCard({ title, data }: CustomHoverCardProps) {
  const pathname = usePathname();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="secondary">
          {title}{" "}
          <span>
            <ChevronDown />
          </span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {data.map((data) => {
          const activeData = pathname === data.href;
          return (
            <div key={data.href}>
              <Button
                asChild
                variant="link"
                className={cn("", {
                  "active-link": activeData,
                })}
              >
                <Link href={data.href}>{data.label}</Link>
              </Button>{" "}
            </div>
          );
        })}
      </HoverCardContent>
    </HoverCard>
  );
}
