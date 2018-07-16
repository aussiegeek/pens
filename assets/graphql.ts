

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