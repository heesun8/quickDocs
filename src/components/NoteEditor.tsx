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
        <div className="card border border-gray-300 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        className="input"
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </h2>
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
                    className="btn btn-sm"
                >Cancel</button>
                <button
                    className="btn btn-sm"
                    disabled={title.trim().length === 0 || content.trim().length === 0}
                    //^Highlight the save button only after both inputs are filled. 
                    onClick={() => {
                        onSave({
                            title,
                            content
                        })
                        setTitle(""); //empty the input boxes after saved is clicked
                        setContent("");
                    }}
                >Save</button>
            </div>
        </div>
    );
}