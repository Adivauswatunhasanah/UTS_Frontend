import { useState } from "react";
import StyledCovidForm from "./CovidForm.styled";

function CovidForm(props) {
    const {provinces, setProvinces} = props;

    //state data form
    const [covidForm, setCovidForm] = useState({
        provinsi: "",
        status: "",
        total: "",
    });

    const {provinsi, status, total} = covidForm

    function handleChange(e) {
        const {name, value} = e.target;
        setCovidForm({...covidForm, [name] : value});
    }

    //state error
    const [isProvinsiError, setProvinsiError] = useState(false);
    const [isStatusError, setStatusError] = useState(false);
    const [isTotalError, setTotalError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        //membuat validasi
        if (provinsi === "") {
            setProvinsiError(true);
        } else if (status === "") {
            setStatusError(true);
            setProvinsiError(false);
        } else if (total === "") {
            setTotalError(true);
            setStatusError(false);
        } else {
            const createData = provinces.map((item) => ({...item}));
            const dataBaru = createData.find((item) => item.kota === provinsi);
            if (dataBaru) {
                if (status === "kasus") {
                    dataBaru.kasus = dataBaru.kasus + Number(total);
                } else if (status === "meninggal") {
                    dataBaru.meninggal = dataBaru.meninggal + Number(total);
                } else if (status === "dirawat") {
                    dataBaru.dirawat = dataBaru.dirawat + Number(total);
                } else if (status === "sembuh") {
                    dataBaru.sembuh = dataBaru.sembuh + Number(total);
                } else {
                    if (status === "kasus") {
                        createData.push({
                            data: {
                                kota: provinsi,
                                kasus: Number(total),
                                sembuh: 0,
                                dirawat: 0,
                                meninggal: 0,
                            }
                        })
                    } else if (status === "dirawat") {
                        createData.push({
                            data: {
                                kota: provinsi,
                                kasus: 0,
                                sembuh: 0,
                                dirawat: Number(total),
                                meninggal: 0,
                            }
                        })
                    } else if (status === "sembuh") {
                        createData.push({
                            data: {
                                kota: provinsi,
                                kasus: 0,
                                sembuh: Number(total),
                                dirawat: 0,
                                meninggal: 0,
                            }
                        })
                    } else if (status === "meninggal") {
                        createData.push({
                            data: {
                                kota: provinsi,
                                kasus: 0,
                                sembuh: 0,
                                dirawat: 0,
                                meninggal: Number(total),
                            }
                        })
                    }
                }
            }
            setProvinces(createData);
            setProvinsiError(false);
            setStatusError(false);
            setTotalError(false);
        }
    }

    //state data
    return(
        <StyledCovidForm>
            <div className="kiri">
                <img src="https://picsum.photos/534/354" alt="" />
            </div>
            <div className="kanan">
                <h3>Form Covid</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="provinsi">Provinsi</label>
                    <select className="form" name="provinsi" id="provinsi" onChange={handleChange} value={provinsi}>
                        {provinces.map((province) => {
                            return <option value={province.kota}>{province.kota}</option>
                        })}
                    </select>
                    {isProvinsiError && <span>Provinsi wajib dilih</span>}
                    <br />

                    <label htmlFor="status">Status</label>
                    <select className="form" name="status" id="status" onChange={handleChange} value={status}>
                        <option value="kasus">Positif</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="dirawat">Dirawat</option>
                    </select>
                    {isStatusError && <span>Status wajib dipilih</span>}
                    <br />

                    <label htmlFor="total">Total</label>
                    <input name="total" id="total" className="form" type="number" onChange={handleChange} value={total}/>
                    {isTotalError && <span>Total wajib diisi</span>}
                    <br />

                    <button>Submit</button>
                </form>
            </div>
        </StyledCovidForm>
    )
}

export default CovidForm;