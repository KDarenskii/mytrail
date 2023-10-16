"use client";

import { FC } from "react";

import { Input } from "../ui/input";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Search: FC<Props> = ({ className }) => {
    return <Input className={cn("h-9", className)} placeholder="Поиск..." />;
};

export default Search;
