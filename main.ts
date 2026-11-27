import { mkdirSync, writeFileSync } from "node:fs";

// One fixed sentence, written verbatim every run: no randomness, no
// network, no clock, so two executions produce byte-identical output.
const sentence =
  "The best meal I ever had was soto ayam from a midnight cart in Yogyakarta, its broth so hot it fogged my glasses as the vendor ladled it over rice and crisp fried shallots.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
