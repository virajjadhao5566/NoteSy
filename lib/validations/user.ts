import * as z from 'zod'

export const userValidation = z.object({
    profile_photo:z.string().nonempty().url(),
    name:z.string().min(3,{message:"Min 3 character required"}).max(30,{message:"Max 30 character"}),
    username:z.string().min(3,{message:"Min 3 character required"}).max(30,{message:"Max 30 character"}),
    bio: z.string().min(3,{message:"Min 3 character required"}).max(1000,{message:"Max 30 character"}),

})