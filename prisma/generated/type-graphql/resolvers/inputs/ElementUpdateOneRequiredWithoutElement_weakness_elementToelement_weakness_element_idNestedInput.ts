import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput } from "../inputs/ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput";
import { ElementWhereUniqueInput } from "../inputs/ElementWhereUniqueInput";

@TypeGraphQL.InputType("ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput", {
  isAbstract: true
})
export class ElementUpdateOneRequiredWithoutElement_weakness_elementToelement_weakness_element_idNestedInput {
  @TypeGraphQL.Field(_type => ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  create?: ElementCreateWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  connectOrCreate?: ElementCreateOrConnectWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  upsert?: ElementUpsertWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;

  @TypeGraphQL.Field(_type => ElementWhereUniqueInput, {
    nullable: true
  })
  connect?: ElementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput, {
    nullable: true
  })
  update?: ElementUpdateWithoutElement_weakness_elementToelement_weakness_element_idInput | undefined;
}
