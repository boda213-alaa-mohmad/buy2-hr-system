import EditHeader from "./components/EditHeader/EditHeader";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <div>My Post: {id}</div>
      <EditHeader />
    </div>
  );
}
