"use client";
import { useRouter } from "next/navigation";

export default function CustomerList() {
  const router = useRouter();
  const customers = [
    { id: "1", name: "田中 太郎", registered: "2024-01-01", status: "商談中", hotness: "高" },
    { id: "2", name: "山田 花子", registered: "2024-02-15", status: "未提案", hotness: "中" },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">顧客一覧</h2>
      {customers.map((customer) => (
        <div key={customer.id} onClick={() => router.push(`/customer/${customer.id}`)} className="cursor-pointer p-2 border-b">
          <p>{customer.name} - {customer.registered} - {customer.status} - {customer.hotness}</p>
        </div>
      ))}
    </div>
  );
}
