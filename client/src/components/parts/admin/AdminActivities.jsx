import { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../../contexts/data-context';
import { GetActivities, DeleteActivity, UpdateActivity, AddActivity } from '../../../services/activity-service';
import { GetData } from '../../../state-management/actions/categories-actions';
import { StyledAdmin } from '../../styles/pages/StyledAdmin';
import { ThemeContext } from '../../../contexts/theme-context';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Name', maxWidth: 170 },
    { id: 'city', label: 'City', maxWidth: 100 },
    { id: 'location', label: 'Location', maxWidth: 100 },
    { id: 'phone', label: 'Phone', maxWidth: 100 },
    { id: 'activitiesHours', label: 'Activity Hours', maxWidth: 100 },
    { id: 'images', label: 'Image', maxWidth: 100 },
    { id: 'greenPass', label: 'GreenPass', maxWidth: 100 },
    { id: 'link', label: 'Link', maxWidth: 100 },
    { id: 'price', label: 'Price', maxWidth: 100 },
    { id: 'delete', label: 'Delete', maxWidth: 100 },
    { id: 'edit', label: 'Edit', maxWidth: 100 },
];

const AdminActivities = () => {
    const { mode } = useContext(ThemeContext);
    const [updateItem, setUpdateItem] = useState({})
    const [addItem, setAddItem] = useState({})
    const [images, setImages] = useState([])
    const [price, setPrice] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { activitiesDispatch } = useContext(MainContext);
    const [rows, setRows] = useState([]);
    const editDialogRef = useRef();
    const addDialogRef = useRef();

    useEffect(() => {
        GetActivities(activitiesDispatch)
            .then(res => { setRows(res.data) })
    }, []);


    const handleEditOnChange = (event) => {
        updateItem[event.target.name] = event.target.value;
    };
    const Update = (event) => {
        event.preventDefault();
        setUpdateItem({ ...updateItem })
        UpdateActivity(updateItem._id, updateItem)
            .then((res) => { console.log(res); })

        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetData(res.data)
                )
            })
    };

    const Delete = (id) => {
        if (window.confirm('Are you sure you want to delete this activity?')) {
            DeleteActivity(id)
                .then((res) => { console.log(res) })

            GetActivities()
                .then(res => {
                    activitiesDispatch(
                        GetData(res.data)
                    )
                })
        }
    };

    const handleImagesOnChange = (event) => {
        images[event.target.name] = event.target.value;
        addItem.images = images;
    };
    const handlePriceOnChange = (event) => {
        price[event.target.name] = Number(event.target.value);
        addItem.price = price;
    };


    const handleAddOnChange = (event) => {
        addItem[event.target.name] = event.target.value;
    }
    const Add = (event) => {
        event.preventDefault();
        setAddItem({ ...addItem });
        AddActivity(addItem)
            .then((res) => { console.log(res); })

        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetData(res.data)
                )
            })
    };



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const switchRows = (row, column, value) => {
        switch (column.id) {
            case 'link':
                return <Link to={`/${row.name}`} state={row} className="table-link">link</Link>
            case 'price':
                return `${row.price[0]}$-${row.price[1]}$`;
            case 'greenPass':
                return row.greenPass ? 'Required' : 'Not Required';
            case 'images':
                return <img className="table-img activities" src={row.images[0]} alt="table" />
            case 'delete':
                return <button onClick={() => Delete(row._id)}><DeleteIcon /></button >
            case 'edit':
                return <button onClick={() => {
                    setUpdateItem(row);
                    editDialogRef.current.showModal();
                }}>
                    <EditIcon />
                </button>


            default:
                return value
        }
    };


    return (
        <StyledAdmin mode={mode}>
            <button className='add-item-btn' onClick={() => addDialogRef.current.showModal()}>Add</button>
            <dialog ref={addDialogRef} className="popup-dialog-modal">
                <h1>Add activity</h1>
                <form className='popup-dialog-form' onSubmit={Add} method="dialog">
                    <input className='input' name='name' onChange={handleAddOnChange} placeholder='name' />
                    <input className='input' name='city' onChange={handleAddOnChange} placeholder='city' />
                    <input className='input' name='location' onChange={handleAddOnChange} placeholder='location' />
                    <input className='input' name='phone' onChange={handleAddOnChange} placeholder='phone' />
                    <input className='input' name='greenPass' onChange={handleAddOnChange} placeholder='green Pass' />
                    <input className='input' name='link' onChange={handleAddOnChange} placeholder='link' />
                    <input className='input' name='activitiesHours' onChange={handleAddOnChange} placeholder='activity Hours' />
                    <input className='input' name={0} onChange={handleImagesOnChange} placeholder='image 1' />
                    <input className='input' name={1} onChange={handleImagesOnChange} placeholder='image 2' />
                    <input className='input' name={2} onChange={handleImagesOnChange} placeholder='image 3' />
                    <input className='input' min={0} type='number' name={0} onChange={handlePriceOnChange} placeholder='min price' />
                    <input className='input' min={0} type='number' name={1} onChange={handlePriceOnChange} placeholder='max price' />
                    <button className='button'>Add</button>
                </form>
                <button className='button' onClick={() => addDialogRef.current.close()}>Close</button>
            </dialog>
            <dialog ref={editDialogRef} className="popup-dialog-modal">
                <h1>Edit activity</h1>
                <form className='popup-dialog-form' onSubmit={Update} method="dialog">
                    <input className='input' name='name' defaultValue={updateItem.name} onChange={handleEditOnChange} placeholder='name' />
                    <input className='input' name='city' defaultValue={updateItem.city} onChange={handleEditOnChange} placeholder='city' />
                    <input className='input' name='location' defaultValue={updateItem.location} onChange={handleEditOnChange} placeholder='location' />
                    <input className='input' name='phone' defaultValue={updateItem.phone} onChange={handleEditOnChange} placeholder='phone' />
                    <input className='input' name='greenPass' defaultValue={updateItem.greenPass} onChange={handleEditOnChange} placeholder='greenPass' />
                    <input className='input' name='link' defaultValue={updateItem.link} onChange={handleEditOnChange} placeholder='link' />
                    <input className='input' name='activitiesHours' defaultValue={updateItem.activitiesHours} onChange={handleEditOnChange} placeholder='activitiesHours' />
                    <button className='button'>Update</button>
                </form>
                <button className='button' onClick={() => editDialogRef.current.close()}>Close</button>
            </dialog>
            <Paper className="admin-table-wrapper">
                <TableContainer sx={{ maxHeight: "70vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className='table-head-th'
                                        key={column.id}
                                        align='left'
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell className="admin-table-td" key={column.id} align={column.align}>
                                                        {
                                                            switchRows(row, column, value)
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </StyledAdmin>
    );
};
export default AdminActivities;