import client from "@/lib/wix";

export default async function Home() {
  const result = await client.dataItems.queryDataItems({
    dataCollectionId: "Books",
  }).find();

  const bookItems = result.items;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      <h1 className="text-2xl font-bold">Books</h1>
      {/* <pre>{JSON.stringify(bookItems, null, 2)}</pre> */}
      <div className="grid grid-cols-3 gap-4">
        {bookItems.map((item) => (
          <div key={item?._id}>
            <h2 >{item?.data.title}</h2>
            <p>{item?.data.author}</p>
            <p >{item?.data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
