


const backendDomain = import.meta.env.VITE_BACKEND_URL



export const SummaryApi = {


    signUp : {
        url : `${backendDomain}/api/v1/user/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomain}/api/v1/user/signin`,
        method : "post"
    }
}