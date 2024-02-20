import { useState } from "react";
export const NoteEditor = ({
    onSave,
}: {
    onSave(note: { title: string, content: string }): void
}) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <div>
            {clicked ? (
                <div className="card border border-gray-300 shadow-xl md:ml-10 xlg:w-96">
                    <div className="card-body">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                className="input card-title"
                                onChange={(e) => setTitle(e.currentTarget.value)}
                            />
                        <input
                            type="text"
                            placeholder="Write note here"
                            value={content}
                            className="card-body input border border-gray-300"
                            onChange={(e) => setContent(e.currentTarget.value)}
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-sm mb-2 bg-secondary"
                            onClick={()=> setClicked(false)}
                        >Cancel</button>
                        <button
                            className="bg-secondary text-white py-1 px-4 rounded-lg mr-2 mb-2 hover:bg-black"
                            disabled={title.trim().length === 0 || content.trim().length === 0}
                            //^Highlight the save button only after both inputs are filled. 
                            onClick={() => {
                                onSave({
                                    title,
                                    content
                                })
                                setTitle(""); //empty the input boxes after saved is clicked
                                setContent("");
                                setClicked(false);
                            }}
                        >Save</button>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                    className="btn w-full md:ml-10 md:w-96" 
                    onClick={()=> setClicked(true)}
                    >+ Add New Note</button>
                </div>
            )}

        </div>
    );
}