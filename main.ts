// One-line review: the hallway switch that controls nothing.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line = "The hallway switch controls nothing. Six years, two electricians, zero answers — I still flip it every night, just in case.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
