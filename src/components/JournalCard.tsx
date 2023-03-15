import { api, RouterOutputs } from "~/utils/api";
import { JournalEditor } from "./JournalEditor";
import { useState } from "react";

type Journal = RouterOutputs["journal"]["getAll"][0];

export const JournalCard = ({
    journal,
    onDelete,
    onEdit,
}: {
    journal: Journal;
    onDelete: () => void;
    onEdit(journal: { title: string, content: string }): void;
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");


    return (
        <div className="card bg-base-100 m-4">
            <div className="card-body">
                <h2 className="card-title text-primary-focus">{journal.title}</h2>
                {clicked ? (
                    <div>
                        <article>
                            {journal.content}
                        </article>
                        <div className="card-actions justify-end mt-2">
                            <button
                                className="btn btn-ghost btn-sm bg-primary-content hover:bg-primary hover:text-white focus:bg-primary"
                                onClick={() => {
                                    setTitle(journal.title);
                                    setContent(journal.content);

                                        <Editor/>
                                    
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-ghost btn-sm bg-primary-content hover:bg-primary hover:text-white focus:bg-primary"
                                onClick={() => onDelete()}
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-ghost btn-sm bg-primary-content hover:bg-primary hover:text-white focus:bg-primary"
                                onClick={() => { setClicked(false) }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <article>
                            {journal.content.substring(0, 100) + "..."}
                        </article>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-ghost btn-sm bg-primary-content hover:bg-primary hover:text-white"
                                onClick={() => setClicked(true)}
                            >Expand
                            </button>
                        </div>
                    </div>

                )}

            </div>
        </div>
    );
}

const Editor: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    return (
        <div>
            <div className="card">
                <h2 className="">
                    <input
                        type="text"
                        placeholder="Journal Title"
                        className="card-title border border-primary mt-2 input text-black w-full sm:w-96"
                        value={title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </h2>
                <textarea
                    placeholder="What's on your mind?"
                    className="card-body border border-primary textarea mt-2 input text-black h-96"
                    value={content}
                    onChange={(value) => setContent(value.currentTarget.value)}
                />
            </div>
        </div>
    );
}