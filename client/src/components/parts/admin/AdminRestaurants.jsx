import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../contexts/data-context';
import { GetRestaurants, DeleteRestaurant, UpdateRestaurant, AddRestaurant } from '../../../services/restaurant-services';
import { GetData } from '../../../state-management/actions/categories-actions';
import { StyledAdmin } from '../../styles/pages/StyledAdmin';
import { ThemeContext } from '../../../contexts/theme-context';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Link } from 'react-router-dom';


import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';









const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};
const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
};
const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'city',
        numeric: true,
        disablePadding: false,
        label: 'City',
    },
    {
        id: 'description',
        numeric: true,
        disablePadding: false,
        label: 'Description',
    },
    {
        id: 'image',
        numeric: true,
        disablePadding: false,
        label: 'Image',
    },
    {
        id: 'location',
        numeric: true,
        disablePadding: false,
        label: 'Location',
    },
    {
        id: 'phone',
        numeric: true,
        disablePadding: false,
        label: 'Phone',
    },
    {
        id: 'greenPass',
        numeric: true,
        disablePadding: false,
        label: 'GreenPass',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'link',
        numeric: true,
        disablePadding: false,
        label: 'Link',
    },
    {
        id: 'activitiesHours',
        numeric: true,
        disablePadding: false,
        label: 'Activity Hours',
    }
];
const EnhancedTableHead = (props) => {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className='admin-table-head'>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        className='admin-table-checkbox'
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell className='admin-table-head-th'
                        key={headCell.id}
                        align='center'
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            className='admin-table-sort-label'
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box className='th-span' component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                    className='admin-table-selected'
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Restaurants
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const AdminRestaurants = () => {
    const { mode } = useContext(ThemeContext);
    const { restaurantsDispatch } = useContext(MainContext);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        GetRestaurants(restaurantsDispatch)
            .then(res => { setRows(res.data) })
    }, []);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name, row) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        console.log(newSelected);
        console.log(row);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <StyledAdmin mode={mode}>
            <Box className='admin-new-table' sx={{ width: '95%' }}>
                <Paper sx={{ width: '100%', mb: 2 }} className="table-style">
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.name);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.name, row)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.name}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell className='table-row-th'
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center" className='table-row-td'>{row.city}</TableCell>
                                                <TableCell align="center" className='table-row-td'>
                                                    <p className='table-description'>
                                                        {row.description}
                                                    </p>
                                                </TableCell>
                                                <TableCell align="center" className='table-row-td'><img className='table-img' src={row.images[0]} alt="img" /></TableCell>
                                                <TableCell align="center" className='table-row-td'>{row.location}</TableCell>
                                                <TableCell align="center" className='table-row-td'>{row.phone}</TableCell>
                                                <TableCell align="center" className='table-row-td'>{row.greenPass ? "Required" : "Not required"}</TableCell>
                                                <TableCell align="center" className='table-row-td'>{row.price[0]}$-{row.price[1]}$</TableCell>
                                                <TableCell align="center" className='table-row-td'>
                                                    <Link to={`/${row.name}`} state={row} className='table-link'>
                                                        link
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="center" className='table-row-td'>
                                                    <p className='table-description'>
                                                        {row.activitiesHours}
                                                    </p>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                />
            </Box>
        </StyledAdmin >

    );
}

export default AdminRestaurants;













// const AdminRestaurants = () => {
//     const { mode } = useContext(ThemeContext);
//     const { restaurants, restaurantsDispatch } = useContext(MainContext)
//     const [updateItem, setupdateItem] = useState({})
//     const [addItem, setaddItem] = useState({})

//     useEffect(() => {
//         if (restaurants.length === 0) {
//             GetRestaurants()
//                 .then(res => {
//                     restaurantsDispatch(
//                         GetData(res.data)
//                     )
//                 })
//         }
//     }, [restaurantsDispatch, restaurants]);


//     const Delete = (id) => {
//         DeleteRestaurant(id)
//             .then((res) => { console.log(res) })

//         GetRestaurants()
//             .then(res => {
//                 restaurantsDispatch(
//                     GetData(res.data)
//                 )
//             })
//     }
//     const handleTableOnInput = (event) => {
//         updateItem[event.target.name] = event.target.value;
//     }
//     const handleFormOnInput = (event) => {
//         addItem[event.target.name] = event.target.value;
//     }
//     const Update = (id, item) => {
//         setupdateItem({ ...item })
//         UpdateRestaurant(id, updateItem)
//             .then((res) => { console.log(res); })

//         GetRestaurants()
//             .then(res => {
//                 restaurantsDispatch(
//                     GetData(res.data)
//                 )
//             })
//     }
//     const Add = (e) => {
//         e.preventDefault()
//         setaddItem(addItem)
//         AddRestaurant(addItem)
//             .then((res) => { console.log(res); })
//         GetRestaurants()
//             .then(res => {
//                 restaurantsDispatch(
//                     GetData(res.data)
//                 )
//             })
//     }


//     return (
//         <StyledAdmin mode={mode}>
//             <div>
//                 <form className='form' onSubmit={Add}>
//                     <h1 className='title'>Add Rstaurant</h1>

//                     <label className='label' htmlFor="text">Name</label>
//                     <input className='input' name='name' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">city</label>
//                     <input className='input' name='city' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">Description</label>
//                     <input className='input' name='description' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">images</label>
//                     <input className='input' name='images' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">location</label>
//                     <input className='input' name='location' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">phone</label>
//                     <input className='input' name='phone' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">comments</label>
//                     <input className='input' name='comments' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">greenPass</label>
//                     <input className='input' name='greenPass' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">rating</label>
//                     <input className='input' name='rating' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">q_a</label>
//                     <input className='input' name='q_a' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">link</label>
//                     <input className='input' name='link' onChange={handleFormOnInput} />

//                     <label className='label' htmlFor="text">activitiesHours</label>
//                     <input className='input' name='activitiesHours' onChange={handleFormOnInput} />

//                     <button className='button'>Add</button>
//                 </form>
//             </div>
//         </StyledAdmin>
//     )
// }
// export default AdminRestaurants;