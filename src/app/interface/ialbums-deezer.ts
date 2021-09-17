export interface IAlbumsDeezer {
  data:{
    title: string

    artist:{
      name: string,
    }

    album:{
      id: number,
      title: string,
      cover_medium: string
    }
  }[];
}
