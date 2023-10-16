import { FC } from "react";

import { Bus, Car, Truck } from "lucide-react";

import Title from "@/components/shared/Title";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}
const ArriveMethods: FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-4", className)}>
            <Title className="mb-6" as="h2">Как добраться</Title>
            <ul>
                <li className="mb-5">
                    <Title
                        className="mb-4"
                        as="h3"
                        size="sm"
                        leftElement={<Car />}
                    >
                        На личном транспорте
                    </Title>
                    <p>
                        Мыс в средней части западного побережья острова Ольхон,
                        на озере Байкал. Оканчивается двухвершинной скалой,
                        называемой «Шаман-скала». В настоящее время мыс имеет
                        статус государственного природного и исторического
                        памятника[6].
                    </p>
                </li>
                <li className="mb-5">
                    <Title
                        className="mb-4"
                        as="h3"
                        size="sm"
                        leftElement={<Truck />}
                    >
                        На общественном транспорте
                    </Title>
                    <p>
                        Мыс в средней части западного побережья острова Ольхон,
                        на озере Байкал. Оканчивается двухвершинной скалой,
                        называемой «Шаман-скала». В настоящее время мыс имеет
                        статус государственного природного и исторического
                        памятника[6].
                    </p>
                </li>
                <li className="mb-5">
                    <Title
                        className="mb-4"
                        as="h3"
                        size="sm"
                        leftElement={<Bus />}
                    >
                        Трансфер
                    </Title>
                    <p>
                        Мыс в средней части западного побережья острова Ольхон,
                        на озере Байкал. Оканчивается двухвершинной скалой,
                        называемой «Шаман-скала». В настоящее время мыс имеет
                        статус государственного природного и исторического
                        памятника[6].
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default ArriveMethods;
