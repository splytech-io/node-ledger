
export interface IListEndpointRequestQuery {
  limit: number;
  skip: number;
  sort: string;
  fields: string;
  conditions: string;
  agg: string;
}
