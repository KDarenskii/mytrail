import React, { FC } from "react";

import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Map: FC<Props> = ({ className }) => {
    return (
        <section className={cn(className)}>
            <Title className="mb-6">Карта</Title>
            <div className="w-full h-[268px] bg-[#D9D9D9] mb-4"></div>
            <Button className="max-w-[360px] w-full" variant="secondary">
                Открыть на Яндекс. Карты
            </Button>
        </section>
    );
};

export default Map;
