export interface IHymn{
    hymnNo: string,
    title: string,
    category: string,
    hymnStanzards:string[][],
    hymnChorus:string[]
}
export interface ICategory{
  category: string,
  hidden: boolean
  hymns:IHymn[]
}