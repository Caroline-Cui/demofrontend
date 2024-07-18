import {Box, Button, IconButton, TextField, Typography} from "@mui/material";
import {useRef, useState} from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DoneIcon from '@mui/icons-material/Done';

function TextRender({startWords, fieldVal, updateVal}) {
    const [editing, setEditing] = useState(false)
    const inputRef = useRef()
    return (
        <Box style={{
            display: 'flex',
        }}>
            {editing ? (
                <>
                    <TextField defaultValue={fieldVal} inputRef={inputRef} />
                    <IconButton
                        style={{
                            marginTop: '-6px'
                        }}
                        onClick={() => {
                            const text = inputRef.current.value
                            setEditing(false)
                            updateVal(text)
                        }}
                    >
                        <DoneIcon style={{
                            fontSize: '20px'
                        }} />
                    </IconButton>
                </>
            ) : (
                <Typography>{`${startWords} ${fieldVal}`}</Typography>
            )}
            <IconButton
                style={{
                    marginTop: '-5px'
                }}
                onClick={() => {
                    setEditing(true)
                }}
            >
                <ModeEditIcon style={{
                    fontSize: '20px'
                }} />
            </IconButton>
        </Box>
    )
}

export default TextRender