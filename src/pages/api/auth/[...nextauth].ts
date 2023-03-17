import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "~/server/auth";
import CredentialsProvider from 'next-auth/providers/credentials';

// const authoptions: NextAuthOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",

//             credentials: {
//                 userName: { label: "Username", type: "text", placeholder: "test123" },
//                 password: { label: "Password", type: "password", placeholder: "0931" }
//             },
//             async authorize(credentials, req) {
//                 const res =  await fetch("/my-endpoint-chosen-later", {
//                     method: 'POST',
//                     body: JSON.stringify(credentials),
//                     headers: { "Content-Type": "application/json"}
//                 })
//                 const user = await res.json()

//                 if (user.userName !== "test123" || user.password !== "0931") {
//                     throw new Error('Invalid credentials')
//                 }
                
//                 return user as any
//             }
//         })
//     ],
//     // pages: {
//     //     signIn: "/auth/signin",
//     // }
//     callbacks: {
//         session({ session, token, user }) {
//             return session // The return type will match the one returned in `useSession()`
//         },
//     },
// }

//---
// const authoptions: NextAuthOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",

//             credentials: {
//                 userName: { label: "Username", type: "text", placeholder: "test123" },
//                 password: { label: "Password", type: "password", placeholder: "0931" }
//             },
//             async authorize(credentials, req) {
//                 const user = credentials as {
//                     userName: string;
//                     password: string;
//                 };
//                 if (user.userName !== "test123" || user.password !== "0931") {
//                     throw new Error('Invalid credentials')
//                 }

//                 return user as any
//             }
//         })
//     ],
//     // pages: {
//     //     signIn: "/auth/signin",
//     // }
//     callbacks: {
//         session({ session, token, user }) {
//             return session // The return type will match the one returned in `useSession()`
//         },
//     },
// }
export default NextAuth(authOptions);
