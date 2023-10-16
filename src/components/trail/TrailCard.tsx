import Image from "next/image";

import React, { FC } from "react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}
const TrailCard: FC<Props> = ({ className }) => {
    return (
        <Card className={cn("min-w-[312px] shadow-md", className)}>
            <CardContent className="pt-4 pb-3 ">
                <div className="mb-3 h-[176px] w-full">
                    <Image
                        className="block w-full h-full object-fill"
                        src="/card-image.png"
                        width={336}
                        height={176}
                        alt=""
                    />
                </div>
                <CardTitle className="leading-snug">Чемал</CardTitle>
            </CardContent>
            <CardFooter>
                <ul className="flex items-center gap-2">
                    <li>
                        <Badge variant="secondary">Горы</Badge>
                    </li>
                    <li>
                        <Badge variant="secondary">Горы</Badge>
                    </li>
                    <li>
                        <Badge variant="secondary">Горы</Badge>
                    </li>
                </ul>
            </CardFooter>
        </Card>
    );
};

export default TrailCard;
