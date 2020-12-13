import logo from '../../logo.svg';
import '../../App.css';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import {useEffect, useState} from "react";
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import * as axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    media: {
        maxWidth: 600,
        height: 600,
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [uid, setUid] = React.useState('');
    const [message, setMessage] = React.useState("");
    const [contentImageName, setContentImageName] = useState("");
    const [contentImage, setContentImage] = useState({});
    const [styleImage, setStyleImage] = useState({});
    const [styleImageName, setStyleImageName] = useState("");
    const [convertedImage, setConvertedImage] = useState("");
    let intervalTime = 0;
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const getImage = () => {
        axios.get('http://157.245.111.51:9000/v1/files').then(res => {
            if (res && res.data && res.data.data && res.data.data.images) {
                for (let image of res.data.data.images) {
                    if (image.uuid == uid && image.stylised) {
                        setConvertedImage(`http://157.245.111.51:9000/${uid}/stylised-output.png`);
                        clearInterval(intervalTime);
                    }
                }
            }
        })
    }
    const uploadFile = (file, fileName, type) => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "file",
            file,
            fileName
        );

        // Details of the uploaded file
        console.log(file);
        const config = {headers: {'Content-Type': 'multipart/form-data', 'uuid': uid, 'name': fileName, type}};
        // Request made to the backend api
        // Send formData object
        axios.post("http://157.245.111.51:9000/v1/upload", formData, config)
            .then(function (response) {
                console.log(response);
                setUid(response.data.data);
                if (type == 'style') {
                    getImage()
                    intervalTime = setInterval(getImage, 5000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const upload = (event) => {
        if (!styleImageName || !contentImageName) {
            setMessage("Please select content and style files!")
            handleClick();
            return;
        }
        uploadFile(contentImage, contentImageName, 'content')
    }

    useEffect(() => {
        if (styleImage && styleImageName) {
            uploadFile(styleImage, styleImageName, 'style');
        }
    }, [uid]);

    return (
        <Container maxWidth="xl" className="App">
            <Paper>
                <img src={logo} className="App-logo" alt="logo"/>
                <Typography variant="h4" component="h1" gutterBottom>
                    Stylize your image
                </Typography>

                <div className={classes.root}>
                    <input accept="image/*" className={classes.input} id="icon-content-file" type="file"
                           onChange={(e) => {
                               if (e.target && e.target.files && e.target.files[0]) {
                                   setContentImageName(e.target.files[0].name)
                                   setContentImage(e.target.files[0])
                               }
                           }}/>
                    <label htmlFor="icon-content-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>

                        {contentImageName || 'Select Content Image'}
                    </label>
                </div>

                <div className={classes.root}>
                    <input accept="image/*" className={classes.input} id="icon-style-file" type="file"
                           onChange={(e) => {
                               if (e.target && e.target.files && e.target.files[0]) {
                                   setStyleImageName(e.target.files[0].name)
                                   setStyleImage(e.target.files[0])
                               }
                           }}/>
                    <label htmlFor="icon-style-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                        {styleImageName || 'Select Style Image'}
                    </label>
                </div>
                {
                    uid ? '' : <Button variant="contained" color="primary" onClick={upload} hidden={uid}>Upload</Button>
                }
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {message}
                    </Alert>
                </Snackbar>
                <Divider/>
                {uid && !convertedImage ? <CircularProgress color="secondary" hidden/> : ''}
                {uid && !convertedImage && 'Converting Image'}
                {convertedImage && <img src={convertedImage} width="50%" alt="logo"/>}
                {convertedImage && <Button onClick={() => {
                    window.location.reload();
                }}>Try again</Button>}
            </Paper>
        </Container>
    );
}

export default App;
