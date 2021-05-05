export interface IResponse {
  incomplete_results: boolean;
  items: IRepo[];
  total_count: number;
}

export interface IRepo {
  description: string;
  id: number;
  name: string;
  open_issues_count: number;
  stargazers_count: number;
  owner: IOwner,
  created_at: string,
}


export interface IOwner {
  avatar_url: string;
  login: string;
}
