import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const PelangganIndex = () => {
  const { pelanggans, getPelanggans, deletePelanggan,getPesanan  } =
    useContext(SkillContext);
  useEffect(() => {
    getPelanggans();
  }, []);
  return (
    <div className="mt-12">
      <div className="m-2 flex justify-end p-2">
        <Link
          to="/pelanggan/create"
          className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Tambah Pelanggan
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor Telepon
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {pelanggans.map((pelanggan) => {
              console.log(pelanggan);
              return (
                <tr
                  key={pelanggan.id}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <td className="px-6 py-4">{pelanggan.pelanggan}</td>
                  <td className="px-6 py-4">{pelanggan.alamat}</td>
                  <td className="px-6 py-4">{pelanggan.telp}</td>
                  <td className="space-x-2 px-6 py-4">
                    <Link
                      to={`/pelanggan/${pelanggan.id}/edit`}
                      className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePelanggan(pelanggan.id)}
                      className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => getPesanan(pelanggan.id)}
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
