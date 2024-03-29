import { useState } from "react";

export const JournalEditor = ({
    onSave,
}: {
    onSave(journal: { title: string, content: string }): void;
}) => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);


    return (
        <div className="justify-center flex grid grid-3">
            <div>

            </div>
            {clicked ? (
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
                    <div className="flex mt-3">
                        <button
                            className="btn flex-1 mt-2"
                            onClick={()=> setClicked(false)}
                        >Cancel
                        </button>
                        <button
                            onClick={() => {
                                onSave({
                                    title,
                                    content: content,
                                });
                                setContent(""); //after pressing 'save' empty the input boxes. 
                                setTitle("");
                                setClicked(false);
                            }}
                            className="btn flex-1 m-2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-end mt-2 mb-2">
                    <button className="btn" onClick={() => setClicked(true)}>+ NEW</button>
                </div>
            )}

        </div>
    );
}