import { Repo } from "./repo";

export interface Response {
  incomplete_results: boolean;
  items: Repo[];
  total_count: number;
}
