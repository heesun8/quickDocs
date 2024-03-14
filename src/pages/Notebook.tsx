import Image from "next/image";
import { NoteEditor } from "~/components/NoteEditor";
import { NoteCard } from "~/components/NoteCard";
import { useSession } from "next-auth/react";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { api, RouterOutputs } from "~/utils/api";

export const Notebook = () => {
    return (
        <div className="h-full bg-base-100">
            {/* Make a subheading of these title sections later */}
            <h2
                className="flex justify-center font-bold text-white bg-secondary-focus p-4">
                Notebook
                <Image src="/notebookIcon2.png" alt="navbar_icon." width={30} height={30}/>
            </h2>
            <div className="bg-secondary p-1 mb-5"/>
            <Content />
        </div>
    );
}

export default Notebook;

type Topic = RouterOutputs["topic"]["getAll"][0];

const Content: React.FC = () => {
    const { data: sessionData } = useSession();
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [active, setActive] = useState<string>("");

    //TOPICS
    const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            //If selectedTopc is not null, return 1st data[0], else return null
            onSuccess: (data) => {
                setSelectedTopic(selectedTopic ?? data[0] ?? null);
            }
        });

    //create a new topic 
    const createTopic = api.topic.create.useMutation({
        //refresh everytime a new topic is added, and display all topic including new one 
        onSuccess: () => {
            void refetchTopics();
        }
    });

    //NOTES 
    //call note.getall and map that data output to "notes"
    const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
        {
            topicId: selectedTopic?.id ?? "",
        },
        {
            enabled: sessionData?.user !== undefined && selectedTopic !== null,
        }
    );

    //create new note
    const createNote = api.note.create.useMutation({
        onSuccess: () => {
            void refetchNotes();
        }
    });
    //delete a note 
    const deleteNote = api.note.delete.useMutation({
        onSuccess: () => {
            void refetchNotes();
        }
    });


    return (
        <div className=" lg:mt-5 lg:mx-5 grid md:grid-cols-4 grid-rows-3 gap-2 sm:mr-2">
            <div className="px-2">
                <input
                    type="text"
                    placeholder="NoteBook Title"
                    className="input input-bordered border-black input-md w-full mt-2"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            createTopic.mutate({
                                title: e.currentTarget.value,
                            });
                            e.currentTarget.value = "";
                        }
                    }}
                />
                <div className="divider" />

                {topics? (<ul className="menu flex rounded-box bg-base-100 border border-secondary w-56 p-1">
                    {topics?.map((topic: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                        <li key={topic.id}>
                            <a
                                href="#"
                                className="m-2 bg-base-100 hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white"
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    setSelectedTopic(topic);
                                }}
                            >
                                {topic.title}
                            </a>
                        </li>
                    ))}
                </ul>) : ""}


            </div>
            <div className="col-span-3 m-2 flex-auto">
                <NoteEditor
                    onSave={({ title, content }) => {
                        void createNote.mutate({
                            title,
                            content,
                            topicId: selectedTopic?.id ?? "",
                        })
                    }}
                />
                <div>
                    {notes?.map((note: { id: Key | null | undefined; }) => (
                        <div key={note.id} className="mt-5">
                            <NoteCard
                                note={note}
                                onDelete={() => void deleteNote.mutate({ id: note.id })}
                            />
                        </div>
                    ))}
                </div>

            </div>


        </div>
    );
}