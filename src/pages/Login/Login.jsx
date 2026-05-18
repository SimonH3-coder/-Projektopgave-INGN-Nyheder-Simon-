
export function Login() {
    const [error, setError] = useState<string | null>(null);
    const {userData, setUserData} = useContext(AuthConetext)

    function postLogin(e: React. SubmitEvent) {
        e.preventDefault
        // Gem input values
        const userName= e.target.brugernavn.value
        const password = e.target.password.value
         // Lav body (URLSearchParams)
         
            const body = new URLSearchParams()
        // append input values til body
        body.append('username', userName)
        body.append('password', passWord)

        const url = "http://localhost:3000/login"
         
        // Post body til backend server og håndter response (succes eller error)
        fetch(url, {method: "POST", body: body })
        .then(res => res.json())
        .then((responce) => responce.json())
        .then((data) => {
            setUsserData(data)
            setError("")    
    })
    .catch((error)=> {
        console.log("Error logging in:", error);
        setError("Der opstod en fejl - prøv igen senere.")
        
    })
}
console.log("UserData: ", userData);

return (
    <>
    {userData && (
        <b>
            Velkommen {userData.user.firstname} {userData.user.lastname}
        </b>
    )}
    {error && <b>{error}</b>}
    <form style={{width: "30vw"}} onSubmit={(e) => postLogin(e)}>
<Grid gtr={3} gap={8}>
    <input type="brugernavn name="brugernavn label="Brugernavn" />
    <input type="password" name="password" label="Password" />
    <Submit value="Login"></Submit>
</Grid>

    </form>
   
    
    </>
)
}
