import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "pzc72vti",
  dataset: "production",
  apiVersion: "2023-01-30",
  useCdn: false,
});

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "pet"]`);

  if (data) {
    console.log("dat data");
    const res = {
      pets: data,
    };
    console.log("Res", JSON.stringify(res));
    return res;
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
