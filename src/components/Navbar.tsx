import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Journal } from "~/pages/Journal";

export const Navbar = () => {
    const { data: sessionData } = useSession();
    return (
        <div className="navbar bg-neutral text-primary-content">
            <div className="flex-1">
                <Link href="/" className="text-lg font-bold">Home</Link>
            </div>
            <div className="flex flex-1 justify-end">
                <div className="flex item-stretch">
                    {sessionData ? (
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={sessionData?.user?.image ?? ""}
                                        alt={sessionData?.user?.name ?? ""}
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="flex menu dropdown-content bg-base-100 text-black rounded w-52 m-1 p-1"
                            >
                                <li><Link href="/Journal"><button>Journal</button></Link></li>
                                <li><Link href="/Notebook"><button>Notebook</button></Link></li>
                                <li><Link href="/Stickies"><button>Stickies</button></Link></li>
                                <li><button
                                    className="text-error"
                                    onClick={()=> void signOut()}
                                >Sign Out</button></li>
                            </ul>
                        </div>
                    ) : (
                        <button 
                        className="btn"
                        onClick={()=> void signIn()}
                        >Sign In</button>
                    )}
                </div>
            </div>
        </div>
    );
}

// const AuthShowcase: React.FC = () => {
//     const { data: sessionData } = useSession();

//     return (
//         <div className="">
//             <p>{sessionData && <span>Logged in as {sessionData.user?.name}</span>}</p>
//             <button
//                 className="btn"
//                 onClick={sessionData ? () => void signOut() : void signIn()}
//             >
//                 {sessionData ? "Sign out" : "Sign In"}
//             </button>
//         </div>
//     );
// }