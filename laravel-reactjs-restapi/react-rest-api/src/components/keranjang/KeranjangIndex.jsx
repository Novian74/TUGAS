import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const KeranjangIndex = () => {
  const { pesanan, pesan } = useContext(SkillContext);
  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);
  const tambah = () => {
    setCounter(counter + 1);
  };

  const kurang = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      window.location.reload();
    }
  };

  const checkout = () => {
    let data = {
      idpelanggan: pesan.id,
      pelanggan: pesan.pelanggan,
      alamat: pesan.alamat,
      idbarang: pesanan.id,
      barang: pesanan.barang,
      jumlah: counter,
      harga: pesanan.harga,
    };

    axios.post("orderdetail", data);
    navigate("/");
  };

  useEffect(() => {}, []);
  return (
    <div className="mt-12">
      <div>
        <table className="w-full table-auto  text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3">
                Id Produk
              </th>
              <th scope="col" className=" py-3">
                Id Pelanggan
              </th>
              <th scope="col" className=" py-3">
                Pelanggan
              </th>
              <th scope="col" className=" py-3">
                Alamat
              </th>
              <th scope="col" className=" py-3">
                Barang
              </th>
              <th scope="col" className=" py-3">
                Jumlah
              </th>
              <th scope="col" className=" py-3">
                Harga
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <td className="py-3 text-center">{pesanan.id}</td>
              <td className="py-3 text-center">{pesan.id}</td>
              <td className="py-3 text-center">{pesan.pelanggan}</td>
              <td className="py-3 text-center">{pesan.alamat}</td>
              <td className="py-3 text-center">{pesanan.barang}</td>
              <td className="py-3 text-center">
                <button
                  onClick={kurang}
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 font-large mx-2 inline-block rounded bg-yellow-200 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  -
                </button>
                {counter}
                <button
                  onClick={tambah}
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 font-large mx-2 inline-block rounded bg-yellow-200 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  +
                </button>
              </td>
              <td className="py-3 text-center">$ {pesanan.harga}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5 flex justify-center space-x-2">
          <button
            onClick={checkout}
            className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-green-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};
