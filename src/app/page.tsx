import { Metadata, NextPage } from "next";

import {
    ArriveMethods,
    Description,
    Intro,
    Map,
    Places,
    Security,
} from "@/components/screens/trail";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
    title: "Чемал – Мульта | MyTrail",
};

const TrailPage: NextPage = () => {
    return (
        <div>
            <Container>
                <Intro className="mb-6" />
                <Description className="mb-6" />
                <Security className="mb-6" />
                <ArriveMethods className="mb-6" />
                <Places className="mb-6" />
                <Map className="mb-6" />
                <div className="h-[120px]"></div>
            </Container>
        </div>
    );
};

export default TrailPage;
