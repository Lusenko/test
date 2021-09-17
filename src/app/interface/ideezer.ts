export interface IDeezer {
  id: number,
  title: string,
  label: string,
  cover_big: string,
  release_date: string,

  tracks:{
    data:{
      title: string
    }[]
  }

}
