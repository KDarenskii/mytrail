import { FC } from "react";

import Title from "@/components/shared/Title";
import TrailCard from "@/components/trail/TrailCard";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}
const Places: FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-4", className)}>
            <Title className="mb-6" as="h2">
                Места на маршруте
            </Title>
            <ul className="flex flex-wrap gap-4">
                <li>
                    <TrailCard />
                </li>
                <li>
                    <TrailCard />
                </li>
            </ul>
        </section>
    );
};

export default Places;
