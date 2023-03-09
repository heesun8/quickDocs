export const Stickies = () => {
    return(
        <div className="h-screen">
            <h2 className="justify-center flex">Stickies</h2>
            <div className="card border grid grid-rows mr-3 ml-3 w-20">
                <h2 className="text-black">
                    <input 
                    type="text"
                    placeholder="Title"
                    />
                </h2>
                <div className="divide-y"/>
                <input 
                type="text"
                placeholder="Lists"
                className="text-black"
                />
            </div>
        </div>
    );
}   

export default Stickies;