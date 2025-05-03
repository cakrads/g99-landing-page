export interface IDataReviews {
  businessName: string
  reviews: IDataReviewsList[]
  averageRating: number
  totalReviews: number
}

export interface IDataReviewsList {
  id: string
  name: string
  avatar: string
  reviewCount: string
  photoCount: string
  rating: number
  date: string
  isNew: boolean
  text: string
}
