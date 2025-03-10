import CustomerDetail from "@/components/CustomerDetail";

export default function CustomerPage({ params }: { params: { id: string } }) {
  return <CustomerDetail customerId={params.id} />;
}
