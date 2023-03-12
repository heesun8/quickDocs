import { type NextPage } from "next";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { JournalEditor } from "~/components/JournalEditor";
import { JournalCard } from "~/components/JournalCard";

import { api, type RouterOutputs } from "~/utils/api";

export const Journal = () => {
    return (
        <div className="h-full">
            <h2
                className="flex justify-center font-bold text-white text-lg bg-accent-focus p-4">
                Journal
            </h2>
            <div className="bg-accent p-1 mb-5"/>
            <Content />
        </div>
    );
}

export default Journal;

type Journal = RouterOutputs["journal"]["getAll"][0];

const Content: React.FC = () => {
    const { data: sessionData } = useSession();
    const [selectedJournal, setSelectedJournal] = useState<Journal | null>(null);

    const { data: journals, refetch: refetchJournal } = api.journal.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            onSuccess: (data) => {
                //below: if selectedJournal is not nullish, return data[0](1st argument)
                //Else return 'null'(2nd argument)
                setSelectedJournal(selectedJournal ?? data[0] ?? null);
            },
        }
    );

    const createJournal = api.journal.create.useMutation({
        onSuccess: () => {
            //so each time a new journal is entered, the page refreshes itself right away
            //and shows the new journals, without the user manually refreshing 
            void refetchJournal();
        }
    });

    const deleteJournal = api.journal.delete.useMutation({
        onSuccess: () => {
            void refetchJournal();
        }
    })

    return (
        <div className="full">
            <JournalEditor
                onSave={({ title, content }) => {
                    void createJournal.mutate({
                        title,
                        content
                    })
                }}
            />
            {journals?.map((journal) => (
                <div key={journal.id}>
                    <JournalCard
                        journal={journal}
                        onDelete={() => void deleteJournal.mutate({ id: journal.id })}
                    />
                    <div className="divider mr-10 ml-10" />
                </div>
            ))}

        </div>
    );
}