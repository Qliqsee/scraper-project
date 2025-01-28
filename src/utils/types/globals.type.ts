export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

// Type for a collection record
export type CollectionItem = {
  id: number;
  title: string;
  description: string;
  country: string;
  status: string;
  tags: string[];
  referenceLinks: string[];
  linksScraped: string[];
  usersCount: number;
};

// Type for a user's donation and petition info
export type GoFundMeDonation = {
  donationUrl: string;
  donationName: string;
  donationAmount: string;
  matchConfidence: "high" | "medium" | "low";
};

export type ChangeDotOrgPetition = {
  petitionUrl: string;
  petitionName: string;
  petitionComment: string;
  matchConfidence: "high" | "medium" | "low";
};

export type Source = "instagram" | "facebook" | "linkedin";

export type iCollectionUser = {
  id: number;
  name: string;
  location: string;
  tags: string[];
  sources: Source[];
};

export interface SocialProfile {
  name: string;
  uri: string;
}

export interface iUser {
  id: number;
  name: string;
  location: string | null;
  tags: string[];
  facebookProfiles: SocialProfile[]; // Array of Facebook profile URLs (can be empty)
  instagramProfiles: SocialProfile[]; // Array of Instagram profile objects
  linkedinProfiles: SocialProfile[]; // Array of Instagram profile objects
  gofundmeDonations: GoFundMeDonation[]; // Array of GoFundMe donation links (can be empty)
  changedotorgPetitions: ChangeDotOrgPetition[]; // Array of Change.org petition links (can be empty)
}
