import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const ProdukIndex = () => {
  const { produks, getProduks, deleteProduk,getKeranjang } = useContext(SkillContext);
  useEffect(() => {
    getProduks();
  }, []);
  return (
    <div className="mt-12">
      <div className="m-2 flex justify-end p-2">
        <Link
          to="/produk/create"
          className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Tambah Produk
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Kategori
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {produks.map((produk) => {
              //console.log(produk);
              return (
                <tr
                  key={produk.id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4">{produk.barang}</td>
                  <td className="px-6 py-4">{produk.deskripsi}</td>
                  <td className="px-6 py-4">{produk.harga}</td>
                  <td className="px-6 py-4">{produk.kategori}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/produk/${produk.id}/edit`}
                      className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteProduk(produk.id)}
                      className="mt-3 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => getKeranjang(produk.id)}
                      class="rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
