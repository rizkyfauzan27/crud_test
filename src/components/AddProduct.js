import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [nama, setNama] = useState('');
  const [hargaBeli, setHargaBeli] = useState('');
  const [hargaJual, setHargaJual] = useState('');
  const [stok, setStok] = useState('');
  const [foto, setFoto] = useState('');
  const [savefoto, setSaveFoto] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    // console.log(URL.createObjectURL(uploaded))
    setFoto(URL.createObjectURL(uploaded))
    setSaveFoto(uploaded)
  }

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProduct({ nama, hargaBeli, hargaJual, stok, foto }));
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={createProduct} className='box mt-5'>
        <div className='field'>
          <label className='label'>Nama</label>
          <div className='control'>
            <input className="input" type="text" placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Harga Beli</label>
          <div className='control'>
            <input className="input" type="text" placeholder="Harga Beli"
            value={hargaBeli}
            onChange={(e) => setHargaBeli(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Harga Jual</label>
          <div className='control'>
            <input className="input" type="text" placeholder="Harga Jual"
            value={hargaJual}
            onChange={(e) => setHargaJual(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Stok</label>
          <div className='control'>
            <input className="input" type="text" placeholder="Stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>Foto</label>
          <div className='control'>
            <input className="input" type="file" placeholder="Foto" id="formFile" accept="image/*"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            // onChange={handleUploadChange}
            />
            {/* <div>
              <img src={foto}  className='img-thumbnail' alt='Foto' />
            </div> */}
          </div>
        </div>
        <div className='field'>
          <button className='button is-success'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
