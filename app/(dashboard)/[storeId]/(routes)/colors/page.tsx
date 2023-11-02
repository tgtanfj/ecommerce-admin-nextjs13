import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { ColorColumn } from "./_components/columns";
import ColorClient from "./_components/client";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const color = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedColors: ColorColumn[] = color.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <ColorClient data={formatedColors} />
    </div>
  );
};

export default ColorsPage;
