import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Plant } from '../../components/plants.tsx';


export class PlantService {
  static async getPlantsByUserId(userId: number): Promise<Plant[]> {
    const response: AxiosResponse<Plant[]> = await axios.get(
      `https://22c2-83-142-150-170.ngrok-free.app/plants/me/${id}`
    );
    return response.data;
  }

  static async createPlant(plant: Plant): Promise<Plant> {
    const response: AxiosResponse<Plant> = await axios.post(
      `https://22c2-83-142-150-170.ngrok-free.app/plants/${plant}/demands`,
      plant
    );
    return response.data;
  }

  static async updatePlant(plant: Plant): Promise<Plant> {
    const response: AxiosResponse<Plant> = await axios.put(
      `https://22c2-83-142-150-170.ngrok-free.app/plants/${plant}/demands/${demand}/status`,
      plant
    );
    return response.data;
  }

  static async deletePlant(plantId: number): Promise<void> {
    await axios.delete(`https://22c2-83-142-150-170.ngrok-free.app/plants/${plantId}`);
  }
}