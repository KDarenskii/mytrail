import { FC } from "react";

import { MapPin } from "lucide-react";

import Title from "@/components/shared/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Intro: FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-4", className)}>
            <div className="mb-8">
                <Title className="mb-4" as="h1" size="lg">
                    Чемал - Мульта
                </Title>
                <ul className="flex items-center gap-2 mb-4">
                    <li>
                        <Badge variant="secondary">Горы</Badge>
                    </li>
                    <li>
                        <Badge variant="secondary">Леса</Badge>
                    </li>
                    <li>
                        <Badge variant="secondary">Озера</Badge>
                    </li>
                </ul>
                <div className="flex items-center gap-1">
                    <MapPin
                        height={24}
                        width={24}
                        className="stroke-muted-foreground"
                    />
                    <span className="text-muted-foreground">
                        Мультинский р-н
                    </span>
                </div>
            </div>
            <div className="flex items-center flex-wrap gap-4">
                <Button className="min-w-[312px] w-full flex-1">
                    Посмотреть на карте
                </Button>
                <Button variant="secondary" className="min-w-[312px] flex-1">
                    Скачать GPX
                </Button>
            </div>
        </section>
    );
};

export default Intro;
