export interface StaffMainPage {
  id: number;
  name?: {
    full: string;
  };
  image?: {
    large: string;
  };
}

export interface StaffMainPageResponse {
  Page: {
    staff: StaffMainPage[];
  };
}
