import { useSession } from "next-auth/react";
import { useState } from "react";
import { StickiesEditor } from "~/components/StickiesEditor";
import { StickiesCard } from "~/components/StickiesCard";
import { api, RouterOutputs } from "~/utils/api";

export const Stickies = () => {
    return (
        <div className="h-full">
            <h2 className="flex justify-center bg-primary-focus text-white text-lg font-bold p-4">Stickies</h2>
            <div className="bg-primary p-1 mb-5"/>
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
        <div className="grid grid-cols-5">
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
    );
}
