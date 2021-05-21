export interface SocialMedia {
    name: string,
    url: string
}

export interface TeamTypes {
    title: string,
    name: string,
    imgUrl: string,
    socialMedia: SocialMedia[]
  }

export interface TeamProps {
    title: string,
    name: string,
    imgUrl: string,
    socialMedia: SocialMedia[],
    index?: number
 }