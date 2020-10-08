export interface IHymn{
    hymnNo: number,
    title: string,
    category: string,
    metre: string,
    bibleReference: string,
    bibleReferenceQ: string,
    hymnToneUrl: string,
    hymnStanzards:string[][],
    hymnChorus:string[][]
}