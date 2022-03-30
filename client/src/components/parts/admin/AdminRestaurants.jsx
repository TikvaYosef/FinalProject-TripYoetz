import { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../../contexts/data-context';
import { GetRestaurants, DeleteRestaurant, UpdateRestaurant, AddRestaurant } from '../../../services/restaurant-services';
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
    { id: 'description', label: 'Description', maxWidth: 100 },
    { id: 'images', label: 'Image', maxWidth: 100 },
    { id: 'greenPass', label: 'GreenPass', maxWidth: 100 },
    { id: 'link', label: 'Link', maxWidth: 100 },
    { id: 'price', label: 'Price', maxWidth: 100 },
    { id: 'delete', label: 'Delete', maxWidth: 100 },
    { id: 'edit', label: 'Edit', maxWidth: 100 },
];

const AdminRestaurants = () => {
    const { mode } = useContext(ThemeContext);
    const [updateItem, setUpdateItem] = useState({})
    const [updateImages, setUpdateImages] = useState([])
    const [updatePrice, setUpdatePrice] = useState([])
    const [addItem, setAddItem] = useState({})
    const [addImages, setAddImages] = useState([])
    const [addPrice, setAddPrice] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { restaurantsDispatch } = useContext(MainContext);
    const [rows, setRows] = useState([]);
    const editDialogRef = useRef();
    const addDialogRef = useRef();

    useEffect(() => {
        GetRestaurants(restaurantsDispatch)
            .then(res => { setRows(res.data) })
    }, []);


    const handleEditOnChange = (event) => {
        updateItem[event.target.name] = event.target.value;
    };
    const Update = (event) => {
        event.preventDefault();
        setUpdateItem({ ...updateItem })
        UpdateRestaurant(updateItem._id, updateItem)
            .then((res) => { console.log(res); })

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    GetData(res.data)
                )
            })
    };

    const Delete = (id) => {
        if (window.confirm('Are you sure you want to delete this restaurant?')) {
            DeleteRestaurant(id)
                .then((res) => { console.log(res) })

            GetRestaurants()
                .then(res => {
                    restaurantsDispatch(
                        GetData(res.data)
                    )
                })
        }
    };

    const handleAddImagesOnChange = (event) => {
        addImages[event.target.name] = event.target.value;
        addItem.images = addImages;
    };
    const handleAddPriceOnChange = (event) => {
        addPrice[event.target.name] = Number(event.target.value);
        addItem.price = addPrice;
    };


    const handleEditImagesOnChange = (event) => {
        updateImages[event.target.name] = event.target.value;
        updateItem.images = updateImages;
    };
    const handleEditPriceOnChange = (event) => {
        updatePrice[event.target.name] = Number(event.target.value);
        updateItem.price = updatePrice;
    };


    const handleAddOnChange = (event) => {
        addItem[event.target.name] = event.target.value;
    }
    const Add = (event) => {
        event.preventDefault();
        setAddItem({ ...addItem });
        AddRestaurant(addItem)
            .then((res) => { console.log(res); })

        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
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
                return <img className="table-img" src={row.images[0]} alt="table" />
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
                <h1>Add restaurant</h1>
                <form className='popup-dialog-form' onSubmit={Add} method="dialog">
                    <input required className='input' name='name' onChange={handleAddOnChange} placeholder='name' />
                    <input required className='input' name='city' onChange={handleAddOnChange} placeholder='city' />
                    <input required className='input' name='description' onChange={handleAddOnChange} placeholder='description' />
                    <input required className='input' name='location' onChange={handleAddOnChange} placeholder='location' />
                    <input required className='input' name='phone' onChange={handleAddOnChange} placeholder='phone' />
                    <input required className='input' name='greenPass' onChange={handleAddOnChange} placeholder='green Pass' />
                    <input required className='input' name='link' onChange={handleAddOnChange} placeholder='link' />
                    <input required className='input' name='activitiesHours' onChange={handleAddOnChange} placeholder='activity Hours' />
                    <input required className='input' name={0} onChange={handleAddImagesOnChange} placeholder='image 1' />
                    <input required className='input' name={1} onChange={handleAddImagesOnChange} placeholder='image 2' />
                    <input required className='input' name={2} onChange={handleAddImagesOnChange} placeholder='image 3' />
                    <input required className='input' min={0} type='number' name={0} onChange={handleAddPriceOnChange} placeholder='min price' />
                    <input required className='input' min={0} type='number' name={1} onChange={handleAddPriceOnChange} placeholder='max price' />
                    <button className='button'>Add</button>
                </form>
                <button className='button' onClick={() => addDialogRef.current.close()}>Close</button>
            </dialog>
            <dialog ref={editDialogRef} className="popup-dialog-modal">
                <h1>Edit restaurant</h1>
                <form className='popup-dialog-form' onSubmit={Update} method="dialog">
                    <input required className='input' name='name' defaultValue={updateItem.name} onChange={handleEditOnChange} placeholder='name' />
                    <input required className='input' name='city' defaultValue={updateItem.city} onChange={handleEditOnChange} placeholder='city' />
                    <input required className='input' name='description' defaultValue={updateItem.description} onChange={handleEditOnChange} placeholder='description' />
                    <input required className='input' name='location' defaultValue={updateItem.location} onChange={handleEditOnChange} placeholder='location' />
                    <input required className='input' name='phone' defaultValue={updateItem.phone} onChange={handleEditOnChange} placeholder='phone' />
                    <input required className='input' name='greenPass' defaultValue={updateItem.greenPass} onChange={handleEditOnChange} placeholder='greenPass' />
                    <input required className='input' name='link' defaultValue={updateItem.link} onChange={handleEditOnChange} placeholder='link' />
                    <input required className='input' name='activitiesHours' defaultValue={updateItem.activitiesHours} onChange={handleEditOnChange} placeholder='activitiesHours' />
                    <input required className='input' name={0} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[0]} placeholder='image 1' />
                    <input required className='input' name={1} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[1]} placeholder='image 2' />
                    <input required className='input' name={2} onChange={handleEditImagesOnChange} defaultValue={updateItem.images && updateItem.images[2]} placeholder='image 3' />
                    <input required className='input' min={0} type='number' name={0} onChange={handleEditPriceOnChange} defaultValue={updateItem.price && updateItem.price[0]} placeholder='min price' />
                    <input required className='input' min={0} type='number' name={1} onChange={handleEditPriceOnChange} defaultValue={updateItem.price && updateItem.price[1]} placeholder='max price' />
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
export default AdminRestaurants;