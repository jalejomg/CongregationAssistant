import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField, Container, Autocomplete, CircularProgress } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

    const [status, setStatus] = useState<AppStatus>(AppStatus.NOT_INITIALIZED);
    const [pubs, setPubs] = useState<string[]>([]);

    async function getPubs() {
        console.log("Loading");
        const response = await fetch(`http://localhost:3000/publishers/`);
        const data = await response.json() as Publisher[];
        console.log("Pubs are: " + JSON.stringify(data));
        const publishers = data.map(pub => pub.firstName + ' ' + pub.lastName);
        setPubs(publishers);
        console.log("Publishers are in state");
        setStatus(AppStatus.INITIALIZED);
    }

    useEffect(() => {
        getPubs();
    }, []);

    return (
        <div>
            {
                status === AppStatus.NOT_INITIALIZED ? (
                    <div>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    </div>
                ) : (
                    <div>
                        <Box sx={{ flexGrow: 1 }}>
                            <AppBar position="static">
                                <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    News
                                </Typography>
                                <Button color="inherit">Login</Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                        <h2>Primera Conversacion</h2>
                        <p>Estudiante: </p>
                        <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
                            <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={pubs}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Publicador" />}
                            />
                        </Container>
                    </div>
                )
            }
        </div>
    );
}

export default App;

interface Publisher {
    firstName: string;
    lastName: string;
    gender: PublisherGender;
    resposibilities: PublisherResposibility[];
    allowedAssignments: Assignment[];
    lastAssigmentsDates: Record<Assignment, Date>[];
}

enum PublisherGender {
    MALE,
    FEMALE
}

enum PublisherResposibility {
    ELDER,
    MINISTERIAL_SERVANT,
    PIONEER,
}

enum Assignment {
    BIBLE_READING,
    INITIAL_CALL,
    RETURN_VISIT,
    BIBLE_STUDY,
}

enum AppStatus {
    INITIALIZED,
    NOT_INITIALIZED,
}