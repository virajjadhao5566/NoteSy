import AccountProfile from "@/components/forms/accountProfile";
import { currentUser } from "@clerk/nextjs";
import { userInfo } from "os";
async function Page(){
    const user = await currentUser()
    const userData = {
        id:user?.id,
        objectId:userInfo?._id,
        username:userInfo?.username || user?.username,
        name:userInfo?.name || user?.firstName || "",
        bio:userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    }
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="text-light-1">Complete your profile to use Notesy</p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile 
                    user = {userData}
                    btnTitle = "Continue"
                />
            </section>
        </main>
    )
}

export default Page;