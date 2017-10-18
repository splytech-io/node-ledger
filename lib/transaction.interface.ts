export interface ITransaction {
  utid: string;

  spec: {
    amount: number;
    type?: string;
  };

  metdata: any;
}
