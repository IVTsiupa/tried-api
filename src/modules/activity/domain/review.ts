type DatePublished = string | Date;

export interface ReviewProps {
  commentId: string;
  customerId: string;
  activityId: string;
  likes: number;
  text: string;
  datePublished: DatePublished;
}
