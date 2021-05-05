import { IOwner } from "../models/owner";
export interface IRepo {
  description: string;
  id: number;
  name: string;
  open_issues_count: number;
  stargazers_count: number;
  owner: IOwner,
  created_at: string,
}
