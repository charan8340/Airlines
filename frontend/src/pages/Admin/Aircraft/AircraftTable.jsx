import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import {Container, Box} from '@mui/material'
import Button from '@mui/material/Button';
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import {Stack} from '@mui/material'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const AircraftTable = () => {
    const [models,
        setmodels] = useState([])

    useEffect(() => {
        const fetchALLModels = async() => {
            try {
                const res = await axios.get("http://localhost:8000/aircraft")
                setmodels(res.data);
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        fetchALLModels()
    }, [])


    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/aircraft/`+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const rows = models.map(model => ({
        id: model.aircraft_id, 
        model_id: model.model_id, 
        call_sign: model.call_sign, 
        valid: model.valid.data
      }));
      
      const columns = [
          {
              field: 'id',
              headerName: 'Aircraft ID',
              width: 200
          }, 
          {
              field: 'model_id',
              headerName: 'Model ID',
              width: 200
          }, 
          {
              field: 'call_sign',
              headerName: 'Call Sign',
              width: 250
          }, 
          {
              field: 'valid',
              headerName: 'Valid',
              width: 250
          },
          {
              field: 'edit',
              headerName: '',
              width: 100,
              sortable: false,
              disableClickEventBubbling: true,
              renderCell: (params) => (
                  <Stack direction="row" spacing={2}>
                      <Button color="primary" size="small" href={`/aircraft_update/${params.row.id}`}>
                          Update
                      </Button>
                  </Stack>
              )
          },
          {
              field: 'delete',
              headerName: '',
              width: 100,
              sortable: false,
              disableClickEventBubbling: true,
              renderCell: (params) => (
                  <Stack direction="row" spacing={2}>
                      <Button color="error" size="small" onClick={handleClickOpen}>
                          Delete
                      </Button>
                      <Dialog
                          fullScreen={fullScreen}
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="responsive-dialog-title"
                      >
                          <DialogTitle id="responsive-dialog-title">
                              {"Delete aircraft instance?"}
                          </DialogTitle>
                          <DialogContent>
                              <DialogContentText>
                                  Are you sure you want to delete this aircraft instance? You might not be able to restore it again.
                              </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                  Cancel
                              </Button>
                              <Button onClick={() => handleDelete(params.row.id)} color="error" autoFocus>
                                  Delete
                              </Button>
                          </DialogActions>
                      </Dialog>
                  </Stack>
              )
          }
      ];
            
    return ( <> <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
        
        
                 
        <Box component="main" sx={{ flexGrow: 1}}>
            <Grid>

                <h1>Aircrafts
                    <Button
                        variant="contained"
                        href="/aircraft_add"
                        style={{
                        float: 'right',
                        backgroundColor: '#000000'
                    }}>Add</Button>
                </h1>

            </Grid>
        </Box>

        <div className="models">

            <Box
                sx={{
                width: '100%',
                marginTop: '5vh'
                
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8
                        }
                    }
                }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick/>

                    
            </Box>

        </div>

    </Box> 

    </>
  )
}
export default AircraftTable