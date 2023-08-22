import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, productSelectors, deleteProduct } from '../features/productSlice';
import { Link } from 'react-router-dom';

const ShowProduct = () => {

  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="box mt-5">
      <Link to="add" className='button is-success'>Tambah Baru</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>stok</th>
            <th>gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
              <tr key={products.id}>
                <td>{index + 1}</td>
                <td>{product.nama}</td>
                <td>{product.hargaBeli}</td>
                <td>{product.hargaJual}</td>
                <td>{product.stok}</td>
                <td>{product.foto}</td>
                <td>
                  <Link to={`edit/${product.id}`} className='button is-info is-small'>Edit</Link>
                  <button onClick={()=> dispatch(deleteProduct(product.id))} className='button is-Danger is-small'>Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProduct
