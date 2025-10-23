import * as fs from "node:fs";

export function createJSON(path: string, fileName: string, content: any) {
  fs.mkdirSync(path, { recursive: true });

  fs.writeFileSync(
    `${path}/${fileName}`,
    JSON.stringify(content, null, 2),
    "utf8",
  );
}
