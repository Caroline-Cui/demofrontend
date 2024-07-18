import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {fetchProfile} from "./utils/fetchProfile";
import TextRender from "./Components/TextRender";
import {updateProfile} from "./utils/updateProfile";

function App() {
    const [name, setName] = useState('...')
    const [email, setEmail] = useState('...')
    const fetchData = async () => {
        const profile = await fetchProfile()
        setName(profile.name)
        setEmail(profile.email)
    }
    useEffect(() => {
        fetchData()
    }, []);
  return (
    <div className="App">
        <header className="App-header">
          {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
          <img src={logo} className="App-MainLogo" alt="logo" />
        </header>
        <p>This react-based application is hosted in an S3 bucket exposed through a CloudFront distribution</p>
        <div className="logos">
            <img src={logoS3} className="App-logoR2L" alt="logo S3" />
            <img src={logoCF} className="App-logoL2R" alt="logo CloudFront" />
        </div>
    </div>
  );
}

const APIResult = () => {
  const { data, error } = useFetch(APIEndPoint, {
    headers: { accept: "application/json" },
  })
  if (error) return <p>{error.message}</p>
  if (data) return <p>{data.message}</p>
  return null
}

export default App;
