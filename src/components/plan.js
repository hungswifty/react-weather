import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";
import { fetchFromDB, addToDB, removeFromDB } from "../firebase/firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  fab: {
    position: "absolute",
    bottom: "13%",
    right: theme.spacing(4),
    background: "linear-gradient(-40deg, #0c067a, #049e5e 70%)",
    transform: "scale(0.8)",
    transition: "all .3s ease-in-out",

    "&:hover": {
      transform: "scale(1.2)"
    }
  },
  dialog_container: {
    background: "linear-gradient(-40deg, #0c067a, #049e5e 85%)",
    "& h2, p, input, textarea": {
      color: "white"
    }
  },
  display_block: {
    marginBottom: "5%",
    display: "block"
  }
}));

function Plan() {
  console.log("da re render");
  const classes = useStyles();
  const titleRef = useRef();
  const contentRef = useRef();

  const [open, setOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([]);

  const handleClickOpen = () => {
    console.log(notes);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    var date = new Date();
    var timestamp =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      " | " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    console.log(timestamp);
    var newNote = {};
    newNote["title"] = titleRef.current.value;
    newNote["timestamp"] = timestamp;
    newNote["content"] = contentRef.current.value;
    //add to Firebase realtime DB, return of addToDB is a key of that note
    newNote["key"] = addToDB(newNote);
    //using key to remove from DB after
    setNotes((notes) => [...notes, newNote]);
    console.log(notes);
    handleClose();
  };

  useEffect(() => {
    fetchFromDB().then((newNotes) => {
      setNotes(newNotes);
    });
  }, []);

  const SlideInDialog = () => (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={handleClickOpen} />
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.dialog_container}>
          <DialogTitle id="alert-dialog-slide-title">
            {"Taking a Note"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Writing something for future
            </DialogContentText>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className={classes.display_block}
              inputRef={titleRef}
            />
            <TextField
              id="standard-multiline-static"
              label="Content"
              variant="outlined"
              multiline
              rows={4}
              className={classes.display_block}
              inputRef={contentRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="default" variant="text">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary" variant="text">
              Save
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );

  return (
    <div className="plan_dashboard">
      <Grid container spacing={0}>
        <Grid item xs={12} className="Notes" style={{ marginTop: "20px" }}>
          {notes.map((note, key) => (
            <ul key={key}>
              <li>
                <p> {note.timestamp} </p>
                <h3> {note.title} </h3>
                <p> {note.content} </p>
              </li>
            </ul>
          ))}
        </Grid>
      </Grid>
      <SlideInDialog />
    </div>
  );
}

export default withRouter(Plan);
