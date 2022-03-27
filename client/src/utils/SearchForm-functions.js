export const SendSearchForm = (event, search, GetCityByName, setCity, navigate, errorRef) => {
    event.preventDefault();
    GetCityByName(search[0].toUpperCase() + search.slice(1).toLowerCase()).then(res => {
        if (res.success) {
            if (!localStorage.city) {
                localStorage.setItem('city', JSON.stringify(res.data));
                setCity(res.data);
            }
            else {
                localStorage.removeItem("city");
                localStorage.setItem('city', JSON.stringify(res.data));
                setCity(res.data);
            }
            navigate("/cities");
        }
        else { errorRef.current.innerHTML = res.message; }
    })
}
export const HandleOnChange = (event, setSearch) => {
    setSearch(event.target.value);
}