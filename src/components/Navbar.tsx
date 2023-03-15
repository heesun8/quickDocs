import LogoutIcon from '@mui/icons-material/Logout';
import NotesIcon from '@mui/icons-material/Notes';
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Journal } from "~/pages/Journal";
import Image from "next/image";

export const Navbar = () => {
    const { data: sessionData } = useSession();
    return (
        <div className="navbar bg-neutral text-base-100">
            <div className="flex-1">
                <Link href="/" className="text-lg font-bold font-['Consolas'] flex">Home<Image src="/my-daily-headerIcon2.png" alt="navbar_icon." width={30} height={30}/></Link>
                
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
                                className="flex menu dropdown-content bg-base-100 text-black rounded border w-52 m-1 p-1"
                            >
                                <li><Link href="/Journal"><button><NotesIcon fontSize="small"/> Journal</button></Link></li>
                                <li><Link href="/Notebook"><button><NotesIcon fontSize="small"/> Notebook</button></Link></li>
                                <li><Link href="/Stickies"><button><NotesIcon fontSize="small"/> Stickies</button></Link></li>
                                <li><button
                                    className="text-error"
                                    onClick={()=> void signOut()}
                                ><LogoutIcon/>Sign Out</button></li>
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