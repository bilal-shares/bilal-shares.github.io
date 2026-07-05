import { rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const targets = [".next", "out"].map((target) => resolve(join(root, target)));

for (const target of targets) {
  if (!target.startsWith(root)) {
    throw new Error(`Refusing to remove path outside project: ${target}`);
  }
  rmSync(target, { force: true, recursive: true });
  console.log(`Removed ${target}`);
}
