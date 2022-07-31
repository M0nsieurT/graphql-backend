import * as TypeGraphQL from "type-graphql";
import { Element } from "../../../models/Element";
import { Element_affinity } from "../../../models/Element_affinity";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Element_affinity)
export class Element_affinityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Element, {
    nullable: false
  })
  async element_elementToelement_affinity_element_id(@TypeGraphQL.Root() element_affinity: Element_affinity, @TypeGraphQL.Ctx() ctx: any): Promise<Element> {
    return getPrismaFromContext(ctx).element_affinity.findUnique({
      where: {
        element_id_affinity_element: {
          element_id: element_affinity.element_id,
          affinity_element: element_affinity.affinity_element,
        },
      },
    }).element_elementToelement_affinity_element_id({});
  }

  @TypeGraphQL.FieldResolver(_type => Element, {
    nullable: false
  })
  async element_elementToelement_affinity_affinity_element(@TypeGraphQL.Root() element_affinity: Element_affinity, @TypeGraphQL.Ctx() ctx: any): Promise<Element> {
    return getPrismaFromContext(ctx).element_affinity.findUnique({
      where: {
        element_id_affinity_element: {
          element_id: element_affinity.element_id,
          affinity_element: element_affinity.affinity_element,
        },
      },
    }).element_elementToelement_affinity_affinity_element({});
  }
}
