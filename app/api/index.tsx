const apiUrl = `https://strapi.srmd.org/api/london-2025?populate[0]=mainMenu&populate[1]=bannerImg.bannerD&populate[2]=bannerImg.bannerM&populate[3]=Intro&populate[4]=eventHighlights.Images&populate[5]=eventHighlights.Images.highlightsImg&populate[6]=eventSchd.schdDates&populate[7]=eventSchd.schdNotes&populate[8]=eventSchd.AdditionalNotes&populate[9]=sponsorship.sponsorList&populate[10]=contact.contactInfo`;
const bearerToken =
  "39d41591192b36c01db4c083b9284af15ed9c7d873dae687be5ae1a599ca76f2f65422391ee33bb1afd1cb9547027e549e8a40776d0a5d94545582ea4eb21d68e2cea1e7ddb1b589b7ef65bd91178102ae5dc0018da22fc4e26e585055f59759a85f7df389d7114d0d27878a73078fabeb8e948f7f8b54c54c8bba0fec9649ec";

const fetchApi = async () => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return response
};

export { fetchApi };
