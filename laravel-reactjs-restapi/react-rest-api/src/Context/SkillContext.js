import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
  name: "",
  slug: "",
  pelanggan: "",
  alamat: "",
  telp: "",
  barang: "",
  deskripsi: "",
  harga: "",
  kategori: "",
};

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);

  const [pelanggans, setPelanggans] = useState([]);
  const [pelanggan, setPelanggan] = useState([]);

  const [produks, setProduks] = useState([]);
  const [produk, setProduk] = useState([]);

  const [pesanan, setPesanan] = useState([]);
  const [pesan, setPesan] = useState([]);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // -------------------------- Skill ----------------------------------------------------------------------------------- //

  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };

  const getSkill = async (id) => {
    const respoonse = await axios.get("skills/" + id);
    const apiSkill = respoonse.data.data;
    setSkill(apiSkill);
    setFormValues({
      name: apiSkill.name,
      slug: apiSkill.slug
    })
  }

  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const updateSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.put("skills/" + skill.id, formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkill = async (id) => {
    await axios.delete("skills/" + id);
    getSkills();
  }

  // ---------------------------- Pelanggan ---------------------------------------------------------------------------- //

  const getPelanggans = async () => {
    const apiPelanggans = await axios.get("pelanggan");
    setPelanggans(apiPelanggans.data.data);
  };

  const storePelanggan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("pelanggan", formValues);
      setFormValues(initialForm);
      navigate("/pelanggan");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const getPelanggan = async (id) => {
    const respoonse = await axios.get("pelanggan/" + id);
    const apiPelanggan = respoonse.data.data;
    setPelanggan(apiPelanggan);
    setFormValues({
      pelanggan: apiPelanggan.pelanggan,
      alamat: apiPelanggan.alamat,
      telp: apiPelanggan.telp
    })
  }

  const updatePelanggan = async (e) => {
    e.preventDefault();
    try {
      await axios.put("pelanggan/" + pelanggan.id, formValues);
      setFormValues(initialForm);
      navigate("/pelanggan");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deletePelanggan = async (id) => {
    await axios.delete("pelanggan/" + id);
    getPelanggans();
  }

  // ---------------------------------- Produk -------------------------------------------------------------------------- //

  const getProduks = async () => {
    const apiProduks = await axios.get("produk");
    setProduks(apiProduks.data.data);
  };

  const storeProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("produk", formValues);
      setFormValues(initialForm);
      navigate("/produk");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }

  const getProduk = async (id) => {
    const respoonse = await axios.get("produk/" + id);
    const apiProduk = respoonse.data.data;
    setProduk(apiProduk);
    setFormValues({
      barang: apiProduk.barang,
      deskripsi: apiProduk.deskripsi,
      harga: apiProduk.harga,
      kategori: apiProduk.kategori
    })
  }

  const updateProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.put("produk/" + produk.id, formValues);
      setFormValues(initialForm);
      navigate("/produk");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteProduk = async (id) => {
    await axios.delete("produk/" + id);
    getProduks();
  }

  // ------------------------------------------- Keranjang -------------------------------------------------------------- //

  const getKeranjang = async (id) => {
    const respoonse = await axios.get("produk/" + id);
    const apiProduk = respoonse.data.data;
    setPesanan(apiProduk);

  }

  const getPesanan = async (id) => {
    const respoonse = await axios.get("pelanggan/" + id);
    const apiPelanggan = respoonse.data.data;
    setPesan(apiPelanggan);
  }

  return <SkillContext.Provider value={{ skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, errors, setErrors, updateSkill, deleteSkill, getPelanggans, pelanggans, storePelanggan, deletePelanggan, getPelanggan, pelanggan, updatePelanggan, getProduks, produks, storeProduk, deleteProduk, getProduk, produk, updateProduk, getKeranjang, getPesanan, pesanan, pesan }}>{children}</SkillContext.Provider>
}

export default SkillContext;