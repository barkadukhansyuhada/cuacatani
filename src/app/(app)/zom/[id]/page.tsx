import { notFound } from "next/navigation";
import { zomData, zomById } from "@/data";
import { ZomDetailClient } from "./ZomDetailClient";

export function generateStaticParams() {
  return zomData.map((z) => ({ id: z.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const zom = zomById.get(id);
  if (!zom) return { title: "Wilayah tidak ditemukan" };
  return {
    title: `${zom.zom} — ${zom.name} | Petani BMKG`,
    description: `Prakiraan kemarau 2026 untuk ${zom.name}. Risiko: ${zom.risikoKekeringan}. Sifat hujan: ${zom.sifatHujan}.`,
  };
}

export default async function ZomDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const zom = zomById.get(id);
  if (!zom) notFound();
  return <ZomDetailClient zom={zom} />;
}
