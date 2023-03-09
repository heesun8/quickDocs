import { api, RouterOutputs } from "~/utils/api";
import { useState } from "react";

type Journal = RouterOutputs["journal"]["getAll"][0];

export const JournalCard = ({
    journal,
    onDelete,
}: {
    journal: Journal;
    onDelete: () => void;
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <div className="card bg-base-100 m-4">
            <div className="card-body">
                <h2 className="card-title text-accent-focus">{journal.title}</h2>
                {clicked ? (
                    <div>
                        <article>
                            {journal.content}
                        </article>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-ghost bg-base-200 btn-sm"
                                onClick={() => setClicked(false)}
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
                                className="btn btn-ghost bg-base-200 btn-sm"
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