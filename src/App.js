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
    <Box style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%'
    }}>
        <Box>
            <TextRender
                startWords={'My name is'}
                fieldVal={name}
                updateVal={async (val) => {
                    await updateProfile({
                        name: val
                    })
                    setName(val)
                }}
            />
            <TextRender
                startWords={'My email is'}
                fieldVal={email}
                updateVal={async (val) => {
                    await updateProfile({
                        email: val
                    })
                    setEmail(val)
                }}
            />
        </Box>
    </Box>
  );
}

export default App;
