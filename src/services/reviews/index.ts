import { IDataReviews } from "./reviews.type";
import DATA from "./DATA.json";

export const ReviewServices = {
  getList: {
    key: "get-review-list",
    call: (): IDataReviews => {
      return DATA;
    },
  },
};