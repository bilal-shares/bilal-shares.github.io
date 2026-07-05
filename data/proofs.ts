export type ProofCategory = "Instagram" | "Facebook" | "YouTube";

const facebookProofs = new Set([39, 72, 78]);
const youtubeProofs = new Set([56, 61, 82]);

export const proofs = Array.from({ length: 95 }, (_, index) => {
  const number = index + 1;
  const category: ProofCategory = facebookProofs.has(number)
    ? "Facebook"
    : youtubeProofs.has(number)
      ? "YouTube"
      : "Instagram";
  const file = `proof-${String(number).padStart(3, "0")}.webp`;

  return {
    id: number,
    title: `${category} result ${String(number).padStart(2, "0")}`,
    category,
    thumb: `/proofs/thumb/${file}`,
    full: `/proofs/full/${file}`,
  };
});
