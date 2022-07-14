import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutCardInput } from "../inputs/ElementCreateOrConnectWithoutCardInput";
import { ElementCreateWithoutCardInput } from "../inputs/ElementCreateWithoutCardInput";
import { ElementUpdateWithoutCardInput } from "../inputs/ElementUpdateWithoutCardInput";
import { ElementUpsertWithoutCardInput } from "../inputs/ElementUpsertWithoutCardInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementUpdateOneRequiredWithoutCardNestedInput", {
  isAbstract: true
})
export class ElementUpdateOneRequiredWithoutCardNestedInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutCardInput, {
    nullable: true
  })
  create?: ElementCreateWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutCardInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpsertWithoutCardInput, {
    nullable: true
  })
  upsert?: ElementUpsertWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateWithoutCardInput, {
    nullable: true
  })
  update?: ElementUpdateWithoutCardInput | undefined;
}
