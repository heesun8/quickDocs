import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";
import { RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
    note,
    onDelete
}: {
    note: Note;
    onDelete: () => void;
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <div className="card bg-base-100 border shadow-md md:ml-10">
            {clicked ? (
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button
                        onClick={()=> setClicked(false)}
                        ><KeyboardArrowUpIcon /></button>
                    </div>

                    <h2 className="text-secondary-content font-bold">{note.title}</h2>
                    <p>{note.content}</p>
                    <div className='card-actions justify-end'>
                        <button
                            className="btn btn-sm"
                            onClick={() => {
                                onDelete();
                            }}
                        >Delete</button>
                    </div>
                </div>
            ) : (
                <div>

                    <div className="card-body">
                        <button
                            className="card-actions justify-end"
                            onClick={() => setClicked(true)}
                        >
                            <KeyboardArrowDownIcon fontSize='medium' className="hover:text-primary" />
                        </button>
                        <h2 className="text-secondary-content font-bold">{note.title}</h2>
                        <p>{note.content.substring(0, 100) + "..."}</p>
                    </div>


                </div>
            )}
        </div>
    );

}