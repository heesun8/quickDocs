import ClearIcon from '@mui/icons-material/Clear';
import { RouterOutputs } from "~/utils/api"

type Stickies = RouterOutputs["stickies"]["getAll"][0];
export const StickiesCard = ({
    stickies,
    onDelete,
}: {
    stickies: Stickies
    onDelete: () => void
}) => {
    return (
        <div className="card card-compact w-40 m-5  border bg-warning">
            <div className="card-body">
                <div className="flex space-x-5">
                    <h2 className="card-title text-lg">{stickies.title}</h2>
                    <button 
                    className="flex font-bold "
                    onClick={()=> onDelete()}
                    >
                        <ClearIcon className="hover:text-success" /></button>
                </div>
                <div className="divider mb-1 mt-0.5" />
                <p>{stickies.content}</p>
            </div>

        </div>
    );
}