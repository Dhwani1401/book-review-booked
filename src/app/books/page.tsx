import client from "@/lib/wix";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const result = await client.dataItems.queryDataItems({
    dataCollectionId: "Books",
  }).find();

  const bookItems = result.items;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20">
      <h1 className="text-2xl font-bold">Books</h1>
      {/* <pre>{JSON.stringify(bookItems, null, 2)}</pre> */}
      <div className="grid grid-cols-3 gap-4">
        {bookItems.map((item) => (
          <Card key={item?._id}>
            <CardHeader>
              <CardTitle>{item?.data.title}</CardTitle>
              <CardDescription>Card description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item?.data.author}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/books/${item?._id}`}>Read Reviews</Link> 
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button> Add Book </Button>
    </div>
  );
}
