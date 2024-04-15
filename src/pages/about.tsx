import Link from "next/link";

export const About = () => {
    return(
        <>
        <div className="h-[100%] flex justify-center mt-10">
            <div className="bg-slate-100 w-[50%] mb-10 border border-2 border-sky-900">
                <h1 className="font-bold font-['Consolas'] text-3xl m-4">About</h1>
                <p className="m-4">You have to sign in with google to see and save your stuff. Anyone can sign in. If you sign in, you&apos;ll get access to any notes you save until you personally delete them. 

When you sign in, google will share your name, email and profile picture with me. I won&apos;t share this data with others. I won&apos;t send you email except in reply to feedback.

If you have any questions, you can ask me. Be sure to include an email address so I know where to send the reply.</p>
                
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Google OAuth2 Homepage</h1>
                <p className="m-4">Accurately represents your app&apos;s identity: The QuickDocs App</p><Link href="https://quick-docs-indol.vercel.app/" className="text-sky-500 mx-4 flex justify-center">https://quick-docs-indol.vercel.app/</Link> <p className="m-4"> is a note taking app created by me. It&apos;s not a company or a business or something you can install on your phone. It&apos;s a website. It lets you transcribe.

                <p className="my-4">What will this app do with user data? The only user data received is: name, email, notes and profile picture. These will be saved and re-displayed to the user. The email will be used to reply to messages sent by the user. The email will be used to identify the user.</p>

Personalized content is only displayed to signed in users.

Describe the content, context, or connection to the app: The QuickDocs is this website, which is a notetaking app. The intention is for the user to transcribe and organize their thoughts.</p>
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Google OAuth2 Limited Use Disclosure</h1>
                <p className="m-4">This app doesn&apos;t request restricted scopes, but if it did, the QuickDocs app use of information received from Google APIs will adhere to the </p> <Link href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" className="m-4 text-sky-500 flex justify-center">Google API Services User Data Policy</Link> <p className="m-4">including the Limited Use requirements.</p>
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Copyright</h1>
                <p className="m-4">If you have a copyright complaint, please tell me and include the QuickDocs url that contains the alleged content, identification of the work claimed to have been infringed including the name and reply email address of the copyright holder/representative, an assertion that the use of the material is not authorized and an assertion that you are the copyright holder/representative.</p>
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Privacy Policy</h1>
                <p className="m-4">This is a public site personalized for each user. I don&apos;t directly collect any information from you other than your login info from google which is used to administer protected access to some of my content. Cookies are used for login purposes. No information is given to other parties, except this site does include google analytics which records anonymized browsing behaviour. This site uses cookies as described below.

How does this application access, use, store, or share Google user data? The only user data received is: name, email, secured notes and profile picture. These are accessed via OAuth2 login. These are stored in an unencrypted database. These are used only: to be re-displayed to the user and as identification for granting access to their content. None of this data is shared with anyone.

By continuing to use this site, you accept this privacy policy in full. If you disagree with this policy, you must not use this site.</p>
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Cookies</h1>
                <p className="m-4">Cookies are short messages sent from your browser to websites you visit. This site uses cookies. By using this site you consent to the use of cookies.

This site uses cookies to identify who is logged in, and google analytics uses cookies to record anonymized browsing behaviour.</p>
                <h1 className="font-bold font-['Consolas'] text-3xl m-4 mt-10">Terms of Service</h1>
                <p className="m-4">This site is designed to educate and entertain. It&apos;s provided &lsquo;as is&rsquo;, without any warranty or condition, express or implied or statutory. This site specifically disclaims any implied warranties of merchantability or fitness for a particular purpose.

By continuing to use this site, you accept these terms of service in full. If you disagree with these terms, you must not use this site.</p>
            </div>
        </div>
        </>
    )
}

export default About;