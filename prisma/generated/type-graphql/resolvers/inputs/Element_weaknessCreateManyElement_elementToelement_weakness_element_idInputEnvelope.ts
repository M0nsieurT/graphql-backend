import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput } from "../inputs/Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput";

@TypeGraphQL.InputType("Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope", {
  isAbstract: true
})
export class Element_weaknessCreateManyElement_elementToelement_weakness_element_idInputEnvelope {
  @TypeGraphQL.Field(_type => [Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput], {
    nullable: false
  })
  data!: Element_weaknessCreateManyElement_elementToelement_weakness_element_idInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
