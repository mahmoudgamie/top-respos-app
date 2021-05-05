import { IRepo } from "./repo";

export interface IResponse {
  incomplete_results: boolean;
  items: IRepo[];
  total_count: number;
}
