export interface IUpload {
    files: File[],
    album: string
}

export interface IDeletMultiPhotos {
    album: string,
    documents?: string,
    FileName?: string,
}