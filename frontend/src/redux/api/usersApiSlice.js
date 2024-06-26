import { apiSlice } from "./apiSlice";

import { USERS_URL } from "../constants";


export const userApiSlice=apiSlice.injectEndpoints({
    endpoints : (builder)=>({
       login: builder.mutation(
        {
            query : (data)=> ({
                url : `${USERS_URL}/auth`,
                method : 'POST' ,
                body:data, 
            })
        }
       ),
       logout: builder.mutation(
        {
            query : ()=> ({
                url : `${USERS_URL}/logout`,
                method : 'POST' ,
              
            })
        }
       ),
       register: builder.mutation(
        {
            query : (data)=> ({
                url : `${USERS_URL}`,
                method : 'POST' ,
                body : data
              
            })
        }
       ),
       forgotpassword: builder.mutation(
        {
            query : (data)=> ({
                    url: `${USERS_URL}/forgot-password`,
                    method : 'POST' ,
                    body : data
            })
        }
       ),
       resetpassword: builder.mutation(
        {
            query: ({ id, token, password })=> ({
                    url: `${USERS_URL}/reset-password/${id}/${token}`,
                    method : 'POST' ,
                    body : {password}
            })
        }
       )
    })
}
   
)

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useForgotpasswordMutation,useResetpasswordMutation} = userApiSlice;