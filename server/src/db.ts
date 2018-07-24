import { createConnection } from "typeorm";
import { DefaultNamingStrategy } from "typeorm/naming-strategy/DefaultNamingStrategy";
import { NamingStrategyInterface } from "typeorm/naming-strategy/NamingStrategyInterface";
import { snakeCase } from "typeorm/util/StringUtils";
import Mushroom from "./mushrooms/entity";

class CustomNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  tableName(targetName: string, productSpecifiedName: string): string {
    return productSpecifiedName ? productSpecifiedName : snakeCase(targetName);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[]
  ): string {
    return snakeCase(
      embeddedPrefixes.concat(customName ? customName : propertyName).join("_")
    );
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}

export default () =>
  createConnection({
    type: "postgres",
    url:
      process.env.DATABASE_URL ||
      "postgres://postgres:forest@localhost:5432/postgres",
    entities: [Mushroom],
    synchronize: true,
    logging: true,
    namingStrategy: new CustomNamingStrategy()
  }).then(_ => console.log("Connected to Postgres with TypeORM"));
