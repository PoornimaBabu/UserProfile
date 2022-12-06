import {React, useEffect, useState} from "react";
import PersonIcon from '@mui/icons-material/Person';
import InputAdornment from '@mui/material/InputAdornment';
import PortraitIcon from '@mui/icons-material/Portrait';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import moment from "moment/moment";
import {db} from '../DB/FirebaseConfig'
import { collection, getDocs, addDoc } from '@firebase/firestore'

const IconTextField = ({icon, ...props}) => {
    return <TextField 
            {...props}
            InputProps={{
                startAdornment: icon ? (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ) : null
            }}
            />
}

export default function ProfileForm(props){

    const {users, setUsers} = props

    const [time, setTime] = useState(null)
    const [day, setDay] = useState(true)
    const userCollectionRef = collection(db, 'users')

    const getUsers = async () => {
        let data = await getDocs(userCollectionRef)
        // console.log('data', data.docs[0].data())
        setUsers(data.docs[0].data())         
    } 

    useEffect(() => {

        let time1 = moment().format('MMMM Do YYYY, h:mm:ss a')
        setDay(time1.split(',')[1].includes('am'))
        setTime(moment().format("MMM Do YYYY"))      

        getUsers()

    }, [])


  const addUser = async () => {
    // console.log('users', users)
    let data = await addDoc(userCollectionRef, {...users})
    console.log('data', data)

    // getUsers()
    
  }

  const resetUser = () => {
    getUsers()
  }

    return <div>
        <Box
        sx={{
          "& > :not(style)": {
            m: 2
          },
          width: 800
        }}
      >
        <Typography variant="h6">Hello! Good {day ? 'Morning' : 'Evening'}, {users?.firstname}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{time}</Typography>
        <Typography variant="h6">My Profile</Typography>
        <Card sx={{ padding: "50px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
                <IconTextField id="fname" label="First Name" icon={<PersonIcon />} value={users?.firstname} onChange={e => setUsers({...users,firstname: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="lname" label="Last Name" icon={<PersonIcon />} value={users?.lastname} onChange={e => setUsers({...users,lastname: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="dname" label="Display Name" icon={<PortraitIcon />} value={users?.displayname} onChange={e => setUsers({...users,displayname: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="email" label="Email" icon={<MailOutlineIcon />} value={users?.email} onChange={e => setUsers({...users,email: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="workphone" label="Work Phone" icon={<LocalPhoneIcon />} value={users?.workphone} onChange={e => setUsers({...users,workphone: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <IconTextField id="location" label="Location" icon={<LocationOnIcon />} value={users?.location} onChange={e => setUsers({...users,location: e.target.value})} />
            </Grid>
            <Grid item xs={12}>
                <IconTextField id="role" label="Role" icon={<PortraitIcon />} value={users?.role} onChange={e => setUsers({...users,role: e.target.value})} />
            </Grid>
            <Grid item >
              <Button onClick={addUser} variant="contained" color="error" sx={{display: 'flex',justifyContent: 'flex-end' }}>
                Save Changes
              </Button>
            </Grid>
            <Grid item >
              <Button onClick={resetUser} variant="contained" color="error" sx={{ display: 'flex',justifyContent: 'flex-end' }}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Card>
        </Box>
    </div>
}