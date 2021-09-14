export interface IAlbums {
  data:{
    title: string

    artist:{
      name: string,
    }

    album:{
      title: string,
      cover_medium: string
    }
  }[];
}
