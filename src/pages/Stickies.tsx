import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { StickiesEditor } from "~/components/StickiesEditor";
import { StickiesCard } from "~/components/StickiesCard";
import { api, RouterOutputs } from "~/utils/api";

export const Stickies = () => {
    return (
        <div className="h-full bg-base-100">
            <h2
                className="flex justify-center bg-success text-white text-lg font-bold p-4"
            >
                Stickies
                <Image src="/stickiesIcon2.png" alt="navbar_icon." width={30} height={30} />
            </h2>
            <div className="bg-warning-content p-1 mb-5" />
            <Content />
        </div>
    );
}

export default Stickies;

type Stickies = RouterOutputs["stickies"]["getAll"][0];

const Content: React.FC = () => {
    const { data: sessionData } = useSession();
    const [selectedStickies, setSelectedStickies] = useState<Stickies | null>(null);

    //getAll Stickies 
    const { data: stickies, refetch: refetchStickies } = api.stickies.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            onSuccess: (data) => {
                setSelectedStickies(selectedStickies ?? data[0] ?? null);
            }
        }
    );
    //create new Stickie 
    const createStickies = api.stickies.create.useMutation({
        //refresh page automatically after creating a new stickie
        onSuccess: () => {
            void refetchStickies();
        }
    });
    //delete stickies 
    const deleteStickies = api.stickies.delete.useMutation({
        //refresh page automatically after deleting a stickie 
        onSuccess: () => {
            void refetchStickies();
        }
    })
    return (
        <div className="h-screen">
            <div className="grid lg:grid-cols-8 md:grid-cols-3 sm:grid-cols-4 md:gap-24">
                <StickiesEditor
                    onSave={({ title, content }) => {
                        void createStickies.mutate({
                            title,
                            content
                        })
                    }}
                />
                {stickies?.map((stickie) => (
                    <div key={stickie.id}>
                        <StickiesCard
                            stickies={stickie}
                            onDelete={() => void deleteStickies.mutate({ id: stickie.id })}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}
