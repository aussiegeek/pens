

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

//==============================================================
// END Enums and Input Objects
//==============================================================