import { Owner } from "../models/owner";
export interface Repo {
  description: string;
  id: number;
  name: string;
  open_issues_count: number;
  stargazers_count: number;
  owner: Owner,
  created_at: string,
}
