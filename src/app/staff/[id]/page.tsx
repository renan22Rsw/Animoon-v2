import SecondHeader from "@/components/Header/second-header";
import { getClient } from "@/lib/ApolloClient";
import { GET_STAFF_BY_ID } from "@/queries/staffs/staff-by-id";
import { StaffByIdResponse } from "@/types/staffs/staff-by-id";

interface StaffProps {
  params: {
    id: number;
  };
}

const Staff = async ({ params }: StaffProps) => {
  const { id } = await params;
  try {
    const response = await getClient().query<StaffByIdResponse>({
      query: GET_STAFF_BY_ID,
      variables: { id },
    });

    if (
      response.data.Page.staff === null ||
      response.data.Page.staff.length === 0
    ) {
      return <div>Staff not found</div>;
    }

    const {
      name,
      age,
      bloodType,
      dateOfBirth,
      description,
      gender,
      image,
      homeTown,
      yearsActive,
    } = response.data.Page.staff[0];

    return (
      <SecondHeader
        name={{
          userPreferred: name.full,
          native: name.native,
          alternative: [],
        }}
        image={image.large}
        description={description.replace(/[^a-zA-Z ]/g, "")}
        gender={gender}
        age={age}
        bloodType={bloodType}
        dateOfBirth={dateOfBirth}
        homeTown={homeTown}
        yearsActive={yearsActive}
      />
    );
  } catch (error) {
    console.log("Failed to fetch staff data", error);
    return <div>Error loading staff details</div>;
  }
};

export default Staff;
