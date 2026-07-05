import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { proofs } from "@/data/proofs";

export function ProofPreview() {
  const featured = [67, 72, 82, 90].map((number) => proofs[number - 1]);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {featured.map((proof, index) => (
        <Link
          key={proof.id}
          href="/proofs"
          className={`group relative overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-surface ${
            index % 2 ? "lg:translate-y-10" : ""
          }`}
          data-reveal
        >
          <Image
            src={proof.thumb}
            alt={proof.title}
            width={480}
            height={853}
            className="h-auto w-full transition duration-700 group-hover:scale-[1.035]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent p-5 pt-20">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#FCAF45]">{proof.category}</p>
              <p className="mt-1 font-semibold">Verified result</p>
            </div>
            <ArrowUpRight size={18} />
          </div>
        </Link>
      ))}
    </div>
  );
}
