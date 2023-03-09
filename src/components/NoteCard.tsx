import { RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
    note,
    onDelete
}: {
    note: Note;
    onDelete: () => void;
}) => {

    return (
        <div className="card bg-base-300">
            <div className="card-body">
                <h2 className="text-accent-focus">{note.title}</h2>
                <p>{note.content}</p>
            </div>
        </div>
    );

}