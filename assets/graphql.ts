

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBrandQuery
// ====================================================

export interface GetBrandQuery_getBrand_pens {
  __typename: "Pen";
  id: string;
  model: string;
}

export interface GetBrandQuery_getBrand {
  __typename: "Brand";
  id: string;
  name: string;
  pens: GetBrandQuery_getBrand_pens[];
}

export interface GetBrandQuery {
  getBrand: GetBrandQuery_getBrand | null;
}

export interface GetBrandQueryVariables {
  brand_id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBrandMutation
// ====================================================

export interface CreateBrandMutation_createBrand_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface CreateBrandMutation_createBrand {
  __typename: "CreateBrandPayload";
  success: boolean;
  brand: CreateBrandMutation_createBrand_brand | null;
}

export interface CreateBrandMutation {
  createBrand: CreateBrandMutation_createBrand;
}

export interface CreateBrandMutationVariables {
  createBrand: CreateBrandInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewerQuery
// ====================================================

export interface GetViewerQuery_viewer {
  __typename: "Viewer";
  name: string;
}

export interface GetViewerQuery {
  viewer: GetViewerQuery_viewer | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBrandEditQuery
// ====================================================

export interface GetBrandEditQuery_getBrand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrandEditQuery {
  getBrand: GetBrandEditQuery_getBrand | null;
}

export interface GetBrandEditQueryVariables {
  brand_id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBrandMutation
// ====================================================

export interface UpdateBrandMutation_updateBrand_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface UpdateBrandMutation_updateBrand {
  __typename: "UpdateBrandPayload";
  success: boolean;
  brand: UpdateBrandMutation_updateBrand_brand | null;
}

export interface UpdateBrandMutation {
  updateBrand: UpdateBrandMutation_updateBrand;
}

export interface UpdateBrandMutationVariables {
  updateBrand: UpdateBrandInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPensQuery
// ====================================================

export interface GetPensQuery_pens_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetPensQuery_pens {
  __typename: "Pen";
  id: string;
  brand: GetPensQuery_pens_brand;
  model: string;
}

export interface GetPensQuery {
  pens: GetPensQuery_pens[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Autogenerated input type of CreateBrand
 */
export interface CreateBrandInput {
  name: string;
  clientMutationId?: string | null;
}

/**
 * Autogenerated input type of UpdateBrand
 */
export interface UpdateBrandInput {
  id: string;
  name: string;
  clientMutationId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================