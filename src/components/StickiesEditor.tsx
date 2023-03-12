import { useState } from "react";

export const StickiesEditor = ({
    onSave
}:{
    onSave(stickies: {title: string, content: string}) : void
}) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    
    return (
        <div className="card card-compact bg-base-100 w-40 m-5 shadow-xl">
            <div className="card-body ">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        className="input flex-1"
                        onChange={(e)=> setTitle(e.currentTarget.value)}
                    />

                <div className="divider mt-1 mb-1" />
                <textarea
                    placeholder="Lists"
                    value={content}
                    className="card-body textarea textarea-lg flex-1"
                    onChange={(e) => setContent(e.currentTarget.value)}
                />
                <div className="card-actions justify-end">
                    <button 
                    className="btn btn-sm"
                    onClick={()=>{
                        onSave({
                            title,
                            content
                        })
                        setTitle("");
                        setContent("");
                    }}
                    >Add</button>
                </div>
            </div>
        </div>
    );
}