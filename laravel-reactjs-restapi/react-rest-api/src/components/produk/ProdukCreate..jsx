import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";

export const ProdukCreate = () => {
  const { formValues, onChange, storeProduk, errors, setErrors } =
    useContext(SkillContext);

  useEffect(() => {
    setErrors({});
  }, []);

  return (
    <div className="mt-12">
      <form
        onSubmit={storeProduk}
        className="mx-auto max-w-md rounded-sm bg-white p-4 shadow-md"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="barang" className="black mb-2 text-sm font-medium">
              Nama Barang
            </label>
            <input
              name="barang"
              value={formValues["barang"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.name && (
              <span className="text-sm text-red-400">
                {errors.barang[0]}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="deskripsi"
              className="black mb-2 text-sm font-medium"
            >
              Deskripsi
            </label>
            <input
              name="deskripsi"
              value={formValues["deskripsi"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.slug && (
              <span className="text-sm text-red-400">{errors.deskripsi[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="harga" className="black mb-2 text-sm font-medium">
              Harga
            </label>
            <input
              name="harga"
              value={formValues["harga"]}
              onChange={onChange}
              className="block w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900"
            />
            {errors.slug && (
              <span className="text-sm text-red-400">{errors.harga[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="kategori"
              className="black mb-2 text-sm font-medium"
            >
              Kategori
            </label>
            <select
              className="relative block w-full appearance-none rounded-md border border-gray-300 bg-white py-1 px-2 text-gray-800"
              name="kategori"
              id="kategori"
              value={formValues["kategori"]}
              onChange={onChange}
            >
              <option value>Pilih Kategori</option>
              <option value={"smartphones"}>Smartphones</option>
              <option value={"laptops"}>Laptops</option>
              <option value={"fragrances"}>Fragrances</option>
              <option value={"skincare"}>Skincare</option>
              <option value={"groceries"}>Groceries</option>
            </select>
          </div>
        </div>
        <div className="my-4">
          <button className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700">
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
};
