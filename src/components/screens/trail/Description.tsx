import Image from "next/image";

import { FC } from "react";

import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Description: FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-4", className)}>
            <Title className="mb-6">Описание</Title>
            <div className="h-[176px] w-full mb-4">
                <Image
                    className="block w-full h-full object-fill"
                    src="/description-image.png"
                    alt="Description"
                    width={752}
                    height={176}
                    priority
                />
            </div>
            <p className="mb-4">
                Мыс в средней части западного побережья острова Ольхон, на озере
                Байкал. Оканчивается двухвершинной скалой, называемой
                «Шаман-скала». В настоящее время мыс имеет статус
                государственного природного и исторического памятника[6].
            </p>
            <Button variant="outline">Читать полностью</Button>
        </section>
    );
};

export default Description;
