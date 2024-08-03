export default function OrderCard({email,name,status,date,money,Type,topbar}:{email:string,name:string,status:string,date:string,money:string,Type:string,topbar:boolean}){
    return (
        <div className="flex text-white w-full justify-around bg-black p-2  border-b-2 mb-1 border-[#212121] pb-4">
            <div className="w-[10%]">
                <h1 className="font-bold">{name}</h1>
                {email && <h2 className="text-[#969696]">{email}</h2>}
            </div>
            <div className="flex justify-center place-items-center w-[10%]">
                <h1 className="font-semibold">{Type}</h1>
            </div>
            <div className="flex justify-center place-items-center w-[10%]">
            <div className={`${!topbar?status=="Completed"?"bg-green-700":status=="Pending"?"bg-yellow-600":"bg-red-700":"bg-[#E21D48]"} rounded-2xl pl-2 pr-2 h-fit 
            flex justify-center place-items-center outline-none`}>
                <h1 className={`${!topbar?status=="Completed"?"bg-green-700":status=="Pending"?"bg-yellow-600":"bg-red-700":"text-white bg-[#E21D48]"}  outline-none rounded-xl font-semibold`}>{status}</h1>
            </div>
            </div>
            <div className="flex justify-center place-items-center w-[10%]">
                <h1 className="font-semibold">{date}</h1>
            </div>
            <div className="flex justify-center place-items-center w-[10%]">
                <h1 className="font-semibold">{money}</h1>
            </div>
        </div>
    )
}