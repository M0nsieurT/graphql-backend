import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Element_affinityCreateManyElement_elementToelement_affinity_element_idInput } from "../inputs/Element_affinityCreateManyElement_elementToelement_affinity_element_idInput";

@TypeGraphQL.InputType("Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope", {
  isAbstract: true
})
export class Element_affinityCreateManyElement_elementToelement_affinity_element_idInputEnvelope {
  @TypeGraphQL.Field(_type => [Element_affinityCreateManyElement_elementToelement_affinity_element_idInput], {
    nullable: false
  })
  data!: Element_affinityCreateManyElement_elementToelement_affinity_element_idInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
