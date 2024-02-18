import axios from "axios";
import { create } from "zustand";
let foodsapi=create((set)=>({
  loading: false,
  foods: [],
  error: null,
  idfood:[],
  getFoods: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await axios.get('http://localhost:3000/foods');
      const data = await res.data;
      set(() => ({
        foods: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },
  getidFood:async (id)=>{
    set(() => ({
      loading: true,
    }));
    try {
      const ress = await axios.get(`http://localhost:3000/foods/${id}`);
      const data = await ress.data;
      set(() => ({
        idfood: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  }
}))

export default foodsapi;