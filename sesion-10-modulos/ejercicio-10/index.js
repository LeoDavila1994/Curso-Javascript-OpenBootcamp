import chalk from "chalk";

import { suma, multiplica } from "./controller.js";

console.log(chalk.green(multiplica(suma(1,2), suma(4,5))));